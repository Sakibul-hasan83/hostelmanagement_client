import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-teal-700 via-emerald-600 to-cyan-700 text-white pt-12 pb-8 relative overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Hostel Info */}
          <div>
            <h2 className="text-2xl font-bold mb-3">GreenStay Hostel</h2>
            <p className="text-white/80 leading-relaxed mb-3">
              Comfortable, safe, and well-managed hostel for students. Easy room booking, payments, and daily updates — all in one place.
            </p>
            <div className="space-y-1 text-sm">
              <div>📞 <span className="font-medium">+880 1700 123 456</span></div>
              <div>✉️ <span className="font-medium">contact@greenstayhostel.com</span></div>
              <div>📍 <span className="font-medium">Uttara, Dhaka, Bangladesh</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-yellow-200 transition duration-300">Rooms & Pricing</a></li>
              <li><a href="#" className="hover:text-yellow-200 transition duration-300">Apply Now</a></li>
              <li><a href="#" className="hover:text-yellow-200 transition duration-300">Hostel Rules</a></li>
              <li><a href="#" className="hover:text-yellow-200 transition duration-300">Payments</a></li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-5 text-xl mb-4">
              <a href="#" className="hover:text-yellow-200 hover:scale-110 transform transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-yellow-200 hover:scale-110 transform transition"><FaInstagram /></a>
              <a href="#" className="hover:text-yellow-200 hover:scale-110 transform transition"><FaTwitter /></a>
              <a href="#" className="hover:text-yellow-200 hover:scale-110 transform transition"><FaLinkedinIn /></a>
            </div>

            <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
            <p className="text-white/80 mb-3 text-sm">
              Subscribe to get updates about room availability & hostel announcements.
            </p>

            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-md px-3 py-2 text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-emerald-500 px-4 rounded-r-md hover:bg-emerald-400 transition text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/70">
          © {new Date().getFullYear()} GreenStay Hostel. All rights reserved.
          <span className="block text-emerald-200 font-semibold">Developed with ❤️ by SakibMania</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
