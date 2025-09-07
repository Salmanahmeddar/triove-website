import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-xl border-t border-white/40 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/13a91384-00b4-4720-a82d-a6047d8dd498"
                alt="TRIOVE Logo"
                className="h-9 w-9 rounded-md shadow-sm"
              />
              <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xl px-3 py-1 rounded-lg shadow-sm">
                TRIOVE
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Unlocking Technology, Delivering Value. Your trusted partner for innovative solutions,
              reliable implementations, and excellence in digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-cyan-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-cyan-600 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-cyan-600 transition-colors">Services</Link></li>
              <li><Link to="/industries" className="text-gray-600 hover:text-cyan-600 transition-colors">Industries</Link></li>
              <li><Link to="/insights" className="text-gray-600 hover:text-cyan-600 transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-cyan-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-600" />
                <span className="text-gray-700">info@triove.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-600" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cyan-600" />
                <span className="text-gray-700">New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/40 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 TRIOVE. All rights reserved. Technology. Reliability. Innovation. Optimal. Value. Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}