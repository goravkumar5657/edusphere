import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-edu-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-edu-blue rounded-xl flex items-center justify-center">
                <i className="fas fa-globe text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">EduSphere</h3>
                <p className="text-xs text-gray-400">Your Learning Universe</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students worldwide with quality education resources and interactive learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-edu-blue transition-all">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-edu-blue transition-all">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-edu-blue transition-all">
                <i className="fab fa-youtube text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-edu-blue transition-all">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/notes" className="text-gray-400 hover:text-white transition-colors">Subject Notes</Link></li>
              <li><Link href="/grammar" className="text-gray-400 hover:text-white transition-colors">English Grammar</Link></li>
              <li><Link href="/animations" className="text-gray-400 hover:text-white transition-colors">3D Animations</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Subjects */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Popular Subjects</h4>
            <ul className="space-y-3">
              <li><Link href="/notes" className="text-gray-400 hover:text-white transition-colors">Physics</Link></li>
              <li><Link href="/notes" className="text-gray-400 hover:text-white transition-colors">Mathematics</Link></li>
              <li><Link href="/notes" className="text-gray-400 hover:text-white transition-colors">Chemistry</Link></li>
              <li><Link href="/notes" className="text-gray-400 hover:text-white transition-colors">Biology</Link></li>
              <li><Link href="/grammar" className="text-gray-400 hover:text-white transition-colors">English Grammar</Link></li>
              <li><Link href="/animations" className="text-gray-400 hover:text-white transition-colors">3D Learning</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support & Help</h4>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">User Guide</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support Center</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="mailto:support@edusphere.com" className="text-gray-400 hover:text-white transition-colors">Email Support</a></li>
              <li><a href="tel:+1-800-EDU-HELP" className="text-gray-400 hover:text-white transition-colors">Phone Support</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 EduSphere. All rights reserved. Made with ❤️ for students worldwide.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
