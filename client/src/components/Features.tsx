import { Link } from 'wouter';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-edu-gray-900 mb-4" data-aos="fade-up">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-edu-gray-500 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive learning resources designed to help students master their subjects and improve their English skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Subject Notes */}
          <div className="bg-edu-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-edu-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-book-open text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-edu-gray-900 mb-4">Subject Notes</h3>
            <p className="text-edu-gray-500 mb-6">Comprehensive notes for Math, Science, History, Computer Science, and more. Well-organized and easy to understand.</p>
            <Link href="/notes" className="text-edu-blue font-semibold hover:text-blue-700 transition-colors">
              Browse Notes <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          
          {/* English Grammar */}
          <div className="bg-edu-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-edu-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-language text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-edu-gray-900 mb-4">English Grammar</h3>
            <p className="text-edu-gray-500 mb-6">Master English grammar with detailed explanations, examples, and practice exercises covering all essential topics.</p>
            <Link href="/grammar" className="text-edu-green font-semibold hover:text-emerald-700 transition-colors">
              Learn Grammar <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          
          {/* Interactive Animations */}
          <div className="bg-edu-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-edu-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-cube text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-edu-gray-900 mb-4">3D Animations</h3>
            <p className="text-edu-gray-500 mb-6">Visual learning through interactive 3D animations, diagrams, and simulations that make complex concepts easy.</p>
            <Link href="/animations" className="text-edu-red font-semibold hover:text-red-700 transition-colors">
              Explore Animations <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          
          {/* Search & Filter */}
          <div className="bg-edu-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay="400">
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-search text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-edu-gray-900 mb-4">Smart Search</h3>
            <p className="text-edu-gray-500 mb-6">Quickly find exactly what you're looking for with our intelligent search and filtering system.</p>
            <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              Try Search <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
          
          {/* Download Resources */}
          <div className="bg-edu-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay="500">
            <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-download text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-edu-gray-900 mb-4">Download Materials</h3>
            <p className="text-edu-gray-500 mb-6">Download notes, worksheets, and resources in PDF format for offline study and reference.</p>
            <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              Download Now <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
          
          {/* Mobile Responsive */}
          <div className="bg-edu-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay="600">
            <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-mobile-alt text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-edu-gray-900 mb-4">Mobile Friendly</h3>
            <p className="text-edu-gray-500 mb-6">Access your learning materials anywhere, anytime with our fully responsive mobile-friendly design.</p>
            <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
              Learn More <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
