import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-edu-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-edu-gray-900 mb-4">
              About EduSphere
            </h1>
            <p className="text-xl text-edu-gray-500 max-w-2xl mx-auto">
              Empowering students worldwide with quality education resources and interactive learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission Content */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-edu-gray-900 mb-6">Our Mission</h2>
              <p className="text-edu-gray-500 mb-6 leading-relaxed">
                EduSphere was created with a simple yet powerful mission: to make quality education accessible to students everywhere. We believe that learning should be engaging, comprehensive, and free from barriers.
              </p>
              <p className="text-edu-gray-500 mb-8 leading-relaxed">
                Our platform combines traditional study materials with modern interactive elements, creating a learning environment that adapts to different learning styles and preferences. From comprehensive subject notes to interactive 3D animations, we provide tools that make complex concepts easy to understand.
              </p>
              
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-edu-blue rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-edu-gray-900">Expert-written content across all major subjects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-edu-green rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-edu-gray-900">Interactive 3D visualizations and animations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-edu-red rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-edu-gray-900">Mobile-responsive design for learning on-the-go</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-edu-gray-900">Completely free access to all resources</span>
                </div>
              </div>
            </div>
            
            {/* Stats & Visual */}
            <div data-aos="fade-left">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-edu-gray-900 mb-6 text-center">Platform Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-edu-blue mb-2">50+</div>
                    <div className="text-sm text-edu-gray-500">Subject Topics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-edu-green mb-2">100+</div>
                    <div className="text-sm text-edu-gray-500">Grammar Rules</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-edu-red mb-2">25+</div>
                    <div className="text-sm text-edu-gray-500">3D Animations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                    <div className="text-sm text-edu-gray-500">Learning Possibilities</div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-edu-gray-50 rounded-xl">
                  <h4 className="font-bold text-edu-gray-900 mb-3">Our Vision</h4>
                  <p className="text-edu-gray-500 text-sm leading-relaxed">
                    To become the world's leading educational platform that bridges the gap between traditional learning and modern technology, making quality education accessible to every student, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-16 bg-edu-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-edu-gray-900 mb-4">
              What Makes EduSphere Special
            </h2>
            <p className="text-xl text-edu-gray-500">
              Innovative features designed for modern learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Comprehensive Content */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-book-open text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-edu-gray-900 mb-4">Comprehensive Content</h3>
              <p className="text-edu-gray-500 leading-relaxed">
                Every piece of content is carefully researched and written by education experts. Our notes cover all major subjects with detailed explanations and practical examples.
              </p>
            </div>

            {/* Interactive Learning */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-cube text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-edu-gray-900 mb-4">3D Visualizations</h3>
              <p className="text-edu-gray-500 leading-relaxed">
                Complex concepts become clear through our interactive 3D animations. From molecular structures to planetary motion, see learning come alive.
              </p>
            </div>

            {/* Grammar Mastery */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-language text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-edu-gray-900 mb-4">Grammar Mastery</h3>
              <p className="text-edu-gray-500 leading-relaxed">
                Master English grammar with our systematic approach. Each rule comes with clear explanations, examples, and practice exercises.
              </p>
            </div>

            {/* Smart Search */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-search text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold text-edu-gray-900 mb-4">Smart Search</h3>
              <p className="text-edu-gray-500 leading-relaxed">
                Find exactly what you need with our intelligent search system. Filter by subject, difficulty level, or search across all content.
              </p>
            </div>

            {/* Mobile Ready */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-mobile-alt text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-bold text-edu-gray-900 mb-4">Mobile Ready</h3>
              <p className="text-edu-gray-500 leading-relaxed">
                Learn anywhere, anytime with our fully responsive design. All features work perfectly on desktop, tablet, and mobile devices.
              </p>
            </div>

            {/* Free Forever */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-heart text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-edu-gray-900 mb-4">Free Forever</h3>
              <p className="text-edu-gray-500 leading-relaxed">
                Education should be accessible to everyone. All our resources are completely free and will always remain free for students worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-edu-gray-900 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-edu-gray-500">
              Leveraging the latest web technologies for optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <i className="fab fa-react text-4xl text-blue-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">React</h3>
              <p className="text-sm text-edu-gray-500">Modern component-based UI framework</p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 text-center">
              <i className="fab fa-css3-alt text-4xl text-teal-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">Tailwind CSS</h3>
              <p className="text-sm text-edu-gray-500">Utility-first CSS framework for rapid UI development</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <i className="fas fa-cube text-4xl text-purple-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">Three.js</h3>
              <p className="text-sm text-edu-gray-500">3D graphics library for interactive animations</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center">
              <i className="fab fa-js-square text-4xl text-green-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">TypeScript</h3>
              <p className="text-sm text-edu-gray-500">Type-safe JavaScript for reliable code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-edu-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who are already improving their knowledge with EduSphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/notes"
              className="bg-white text-edu-blue px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Subject Notes
            </a>
            <a
              href="/grammar"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-edu-blue transition-colors"
            >
              Learn Grammar
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AboutPage;
