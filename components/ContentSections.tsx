
import React from 'react';
import { Book, Microscope, Calculator, Globe, Atom, ArrowRight, Tag } from 'lucide-react';
import { ClassCardProps, CourseProps, FacultyProps } from '../types';

/* --- Mission Section --- */
export const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h4 className="text-primary-600 font-bold uppercase tracking-widest text-sm">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              We Don't Just Teach, <br />
              <span className="relative inline-block">
                <span className="relative z-10">We Transform Careers</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary-200/60 -skew-x-12 z-0"></span>
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At EduSpark, our mission is to provide affordable, high-quality education to every aspiring student. We believe in a concept-driven approach rather than rote learning. Our tailored methodologies ensure that every student reaches their full potential, whether preparing for board exams or competitive entrance tests.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">10k+</h3>
                <p className="text-slate-500 text-sm">Students Trusted</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">95%</h3>
                <p className="text-slate-500 text-sm">Success Rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">50+</h3>
                <p className="text-slate-500 text-sm">Expert Mentors</p>
              </div>
            </div>
             <button className="mt-6 text-primary-600 font-bold hover:text-primary-700 flex items-center gap-2 group">
              Read Our Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-100 rounded-full z-0"></div>
            {/* Updated Image URL */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Founder Director" 
              className="relative z-10 rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
            <div className="absolute bottom-8 right-8 z-20 bg-white p-4 rounded-lg shadow-lg border-l-4 border-primary-500 max-w-xs">
              <p className="text-slate-800 font-bold italic">"Education is the most powerful weapon which you can use to change the world."</p>
              <p className="text-slate-500 text-sm mt-2 font-semibold">- Dr. R.K. Sharma, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- Classes Section --- */
const classesData: ClassCardProps[] = [
  { grade: "Class 9", description: "Building strong foundations for future success in Science & Math.", icon: <Book size={32} /> },
  { grade: "Class 10", description: "Intensive preparation for Board Exams with focus on high scores.", icon: <Microscope size={32} /> },
  { grade: "Class 11", description: "Stream selection specialized coaching for Medical & Engineering.", icon: <Atom size={32} /> },
  { grade: "Class 12", description: "Final push for Board excellence + Entrance Exam Cracking.", icon: <Calculator size={32} /> },
];

export const Classes: React.FC = () => {
  return (
    <section className="py-20 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Path</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Select your current grade to explore tailored courses designed to match your curriculum and competitive goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classesData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.grade}</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              <button className="w-full py-3 border border-primary-200 text-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                View Courses
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Featured Courses Section --- */
const coursesData: CourseProps[] = [
  { 
    subject: "Physics Mastery", 
    level: "JEE Advanced", 
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400", 
    tags: ["Physics", "Engg."],
    price: "₹14,999",
    classGrade: "Class 11",
    board: "CBSE / ISC"
  },
  { 
    subject: "Mathematics", 
    level: "Board + CUET", 
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400", 
    tags: ["Math", "Calculus"],
    price: "₹8,999",
    classGrade: "Class 12",
    board: "CBSE"
  },
  { 
    subject: "Organic Chemistry", 
    level: "NEET Special", 
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400", 
    tags: ["Chemistry", "Medical"],
    price: "₹11,499",
    classGrade: "Class 11",
    board: "All Boards"
  },
  { 
    subject: "Biology", 
    level: "NCERT Deep Dive", 
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400", 
    tags: ["Zoology", "Botany"],
    price: "₹9,999",
    classGrade: "Class 10",
    board: "ICSE / CBSE"
  },
  { 
    subject: "English Core", 
    level: "Class 12 Boards", 
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400", 
    tags: ["Language", "Lit."],
    price: "₹4,999",
    classGrade: "Class 12",
    board: "CBSE"
  },
  { 
    subject: "Computer Science", 
    level: "Python & SQL", 
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400", 
    tags: ["Coding", "CS"],
    price: "₹6,999",
    classGrade: "Class 11-12",
    board: "All Boards"
  },
];

export const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Popular Courses</h2>
            <p className="text-slate-500">Curated specifically for high-performance results.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors">
            View All Courses <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-48 overflow-hidden shrink-0">
                <img src={course.image} alt={course.subject} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 shadow-sm">
                  {course.level}
                </div>
                <div className="absolute bottom-0 right-0 bg-primary-600 text-white px-4 py-1.5 rounded-tl-xl font-bold text-sm">
                  {course.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.subject}</h3>
                
                {/* Board & Class Info */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 mt-auto pt-2">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded text-slate-600">
                    <span className="font-semibold text-primary-500">{course.classGrade}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    <span>{course.board}</span>
                  </div>
                </div>

                <button className="w-full py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors mt-auto">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-bold">View All Courses</button>
        </div>
      </div>
    </section>
  );
};

/* --- Faculty Section --- */
const facultyData: FacultyProps[] = [
  { name: "Dr. A. Verma", role: "Senior Physics Faculty", subject: "Physics", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300", experience: "20 Years Exp." },
  { name: "Mrs. S. Gupta", role: "HOD Mathematics", subject: "Mathematics", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300", experience: "15 Years Exp." },
  { name: "Mr. R. Khanna", role: "Chemistry Expert", subject: "Chemistry", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300", experience: "12 Years Exp." },
  { name: "Ms. P. Das", role: "Biology Mentor", subject: "Biology", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300", experience: "10 Years Exp." },
];

export const Faculty: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Mentors</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Learn from the best minds in the industry with years of experience in shaping rankers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyData.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl z-10 relative group-hover:scale-105 transition-transform duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-primary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary-400 font-medium text-sm">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
