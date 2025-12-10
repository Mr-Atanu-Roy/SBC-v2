import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, School, BookOpen, Send, CheckSquare, Users } from 'lucide-react';

export const EnquiryPage: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    contactPerson: 'Father',
    email: '',
    phone: '',
    altPhone: '',
    address: '',
    schoolName: '',
    board: 'CBSE',
    studentClass: 'Class 9',
    courses: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (course: string) => {
    setFormData(prev => {
      if (prev.courses.includes(course)) {
        return { ...prev, courses: prev.courses.filter(c => c !== course) };
      } else {
        return { ...prev, courses: [...prev.courses, course] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send data to backend here
    console.log('Form Submitted:', formData);
    alert('Thank you for your enquiry! We will contact you shortly.');
  };

  const courseOptions = ['English Core', 'Math', 'Biology', 'Science'];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Form Header */}
          <div className="bg-slate-900 px-8 py-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-50 z-0">
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
               <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Admission Enquiry</h1>
              <p className="text-slate-300 max-w-lg mx-auto">Take the first step towards academic excellence. Fill out the form below and our academic counselor will get in touch with you.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            
            {/* Section: Personal Details */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 border-l-4 border-primary-500 pl-3 mb-6 flex items-center gap-2">
                <User size={20} className="text-primary-500" /> Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Student Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Student Name</label>
                  <input
                    required
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="Enter student's full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Contact Person */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Contact Person</label>
                  <div className="relative">
                    <select
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-gray-50 focus:bg-white appearance-none"
                    >
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Self">Self (Student)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <Users size={16} className="text-slate-500" />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Email Address</label>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-gray-50 focus:bg-white"
                    />
                    <Mail size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-gray-50 focus:bg-white"
                    />
                    <Phone size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  </div>
                </div>

                {/* Alt Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Alternate Phone</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="altPhone"
                      value={formData.altPhone}
                      onChange={handleInputChange}
                      placeholder="Optional"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-gray-50 focus:bg-white"
                    />
                     <Phone size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  </div>
                </div>

              </div>
              
               {/* Address */}
               <div className="space-y-2 mt-6">
                  <label className="block text-sm font-medium text-slate-700">Residential Address</label>
                  <div className="relative">
                    <textarea
                      required
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Full residential address"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                    ></textarea>
                    <MapPin size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  </div>
                </div>
            </div>

            {/* Section: Academic Details */}
            <div className="pt-4 border-t border-gray-100">
               <h3 className="text-lg font-bold text-slate-800 border-l-4 border-primary-500 pl-3 mb-6 flex items-center gap-2">
                <School size={20} className="text-primary-500" /> Academic Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* School Name */}
                <div className="space-y-2 md:col-span-1">
                  <label className="block text-sm font-medium text-slate-700">Current School</label>
                  <input
                    required
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    placeholder="School Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Board */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Board</label>
                  <select
                    name="board"
                    value={formData.board}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-gray-50 focus:bg-white"
                  >
                    <option value="CBSE">CBSE</option>
                    <option value="ISC">ISC</option>
                    <option value="State Board">State Board</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Class */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Current Class</label>
                  <select
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-gray-50 focus:bg-white"
                  >
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Section: Course Selection */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg font-bold text-slate-800 border-l-4 border-primary-500 pl-3 mb-6 flex items-center gap-2">
                <BookOpen size={20} className="text-primary-500" /> Interested Courses
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {courseOptions.map((course) => (
                  <label 
                    key={course}
                    className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.courses.includes(course) 
                        ? 'border-primary-500 bg-primary-50 text-primary-900' 
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={course}
                      checked={formData.courses.includes(course)}
                      onChange={() => handleCheckboxChange(course)}
                      className="sr-only"
                    />
                    <div className={`mr-3 flex items-center justify-center w-6 h-6 rounded border transition-colors ${
                      formData.courses.includes(course) ? 'bg-primary-500 border-primary-500 text-white' : 'border-gray-400 bg-white'
                    }`}>
                      {formData.courses.includes(course) && <CheckSquare size={14} />}
                    </div>
                    <span className="font-medium">{course}</span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">*Select all that apply</p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit"
                className="w-full md:w-auto md:px-12 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-bold rounded-lg shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Send size={20} /> Submit Enquiry
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};