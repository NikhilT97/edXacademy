import React from 'react';
import { BookOpen, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl mr-3 shadow-md">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                edXacademy
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Empowering learners worldwide with high-quality courses and expert instruction. 
              Your journey to mastering new skills starts here.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
                             text-gray-400 hover:text-white hover:bg-gradient-to-r 
                             hover:from-blue-600 hover:to-purple-600 transition-all 
                             duration-300 transform hover:scale-105 shadow-md"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Courses', 'Instructors', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2">
              Categories
            </h3>
            <ul className="space-y-3 text-sm">
              {['Web Development', 'Data Science', 'AI & Machine Learning', 'Mobile Development', 'DevOps', 'Design'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>contact@edXacademy.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+91 8421 899 526</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                <span className="leading-relaxed">
                  123 Ashray pearl park<br />
                  Learning City, LC 12345<br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left text-sm mb-4 md:mb-0">
            © 2025 edXacademy. All rights reserved. Made with ❤️ for learners worldwide.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
