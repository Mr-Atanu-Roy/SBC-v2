import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, ChevronDown, Phone, Mail, MapPin, Map, MessageCircle, ArrowRight } from 'lucide-react';
import { NavItem, DropdownItem, PageType } from '../types';

const navLinks: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#mission' },
  { label: 'Enquiry', href: '#enquiry' },
];

const courseDropdown: DropdownItem[] = [
  { label: 'Class 9 Foundation', href: '#' },
  { label: 'Class 10 Board Prep', href: '#' },
  { label: 'Class 11 JEE/NEET', href: '#' },
  { label: 'Class 12 Target', href: '#' },
];

interface HeaderProps {
  activePage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should show the scrolled/solid header style
  // We show it if scrolled OR if we are NOT on the home page (inner pages get solid header)
  const isHome = activePage === 'home';
  const effectiveIsScrolled = isScrolled || !isHome;

  // Dynamic classes based on scroll state and active page
  const headerClass = effectiveIsScrolled
    ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-orange-100 py-0'
    : 'bg-transparent border-transparent py-4';
    
  const textClass = effectiveIsScrolled ? 'text-slate-600 hover:text-primary-600' : 'text-white/90 hover:text-white';
  const logoTextClass = effectiveIsScrolled ? 'text-slate-900' : 'text-white';
  const dropdownButtonClass = effectiveIsScrolled ? 'text-slate-600 group-hover:text-primary-600' : 'text-white/90 group-hover:text-white';

  const handleNavClick = (e: React.MouseEvent, link: NavItem) => {
    e.preventDefault();
    if (link.label === 'Home') {
      onNavigate('home');
      window.scrollTo(0, 0);
    } else if (link.label === 'Enquiry') {
      onNavigate('enquiry');
      window.scrollTo(0, 0);
    } else {
      // For 'About' or others, go home then scroll
      if (!isHome) {
        onNavigate('home');
        // Small timeout to allow render before scrolling
        setTimeout(() => {
           const element = document.querySelector(link.href);
           element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => { onNavigate('home'); window.scrollTo(0, 0); }}
          >
            <div className="bg-primary-500 p-2 rounded-lg text-white shadow-lg">
              <GraduationCap size={28} />
            </div>
            <span className={`font-bold text-2xl tracking-tight transition-colors ${logoTextClass}`}>
              Sandip<span className={effectiveIsScrolled ? 'text-primary-600' : 'text-orange-300'}>BanerjeeClasses</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`${textClass} font-medium transition-colors ${activePage === 'enquiry' && link.label === 'Enquiry' ? 'text-primary-600 font-bold' : ''}`}
              >
                {link.label}
              </a>
            ))}

            {/* Dropdown */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 font-medium focus:outline-none transition-colors ${dropdownButtonClass}`}>
                Courses <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 w-64 bg-white rounded-b-xl rounded-tr-xl shadow-xl border-t-4 border-primary-500 overflow-hidden transition-all duration-200 origin-top transform ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="py-2">
                  {courseDropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-3 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors border-l-4 border-transparent hover:border-primary-500"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => { onNavigate('enquiry'); window.scrollTo(0, 0); }}
              className="ml-4 px-6 py-2.5 bg-primary-600 text-white rounded-full font-semibold shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:shadow-primary-500/50 transition-all transform hover:-translate-y-0.5"
            >
              Register Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${effectiveIsScrolled ? 'text-slate-600' : 'text-white'} hover:text-primary-500 focus:outline-none transition-colors`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg left-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50"
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 py-3 text-base font-medium text-slate-700">Courses</div>
            {courseDropdown.map((item) => (
               <a
               key={item.label}
               href={item.href}
               className="block pl-8 pr-3 py-2 text-sm text-slate-500 hover:text-primary-600"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               {item.label}
             </a>
            ))}
            <div className="mt-4 px-3">
              <button 
                onClick={() => { onNavigate('enquiry'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
                className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-lg font-bold shadow-md"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary-500 p-1.5 rounded text-white">
                <GraduationCap size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Sandip<span className="text-primary-500">BanerjeeClasses</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering students to achieve academic excellence through personalized coaching and modern methodologies.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors" title="Locate on Map"><Map size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-500 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Admissions</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Scholarship Test</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Result Gallery</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Careers</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Popular Courses</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Class 10 Intensive</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">IIT-JEE Foundation</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">NEET Medical Prep</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Class 12 Boards + CUET</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 mt-0.5 shrink-0" />
                <span>123 Knowledge Park, Education Hub, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span>+91 98765 43210 / +91 11223 34455</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span>support@sandipbanerjeeclasses.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} SandipBanerjeeClasses. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Created by John Doe</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/1234567890" // Replace with actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-in"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
    </a>
  );
};