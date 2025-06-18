const About = () => {
  return (
    <section id="about" className="py-20 bg-edu-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-edu-gray-900 mb-4" data-aos="fade-up">
            About EduSphere
          </h2>
          <p className="text-xl text-edu-gray-500 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Empowering students worldwide with quality education resources and interactive learning experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-edu-gray-900 mb-6">Our Mission</h3>
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
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-edu-gray-900 mb-6 text-center">Platform Statistics</h4>
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
                <h5 className="font-bold text-edu-gray-900 mb-3">Our Vision</h5>
                <p className="text-edu-gray-500 text-sm leading-relaxed">
                  To become the world's leading educational platform that bridges the gap between traditional learning and modern technology, making quality education accessible to every student, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
