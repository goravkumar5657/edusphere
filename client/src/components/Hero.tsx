import ThreeScene from './ThreeScene';
import { Link } from 'wouter';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-edu-gray-50 to-white">
      {/* 3D Animation Container */}
      <ThreeScene />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-edu-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-edu-blue">EduSphere</span>
          </h1>
          <p className="text-xl sm:text-2xl text-edu-gray-500 mb-8 leading-relaxed">
            Your comprehensive learning universe where knowledge meets innovation. 
            Access quality notes, master English grammar, and explore interactive educational content.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('subjects')}
              className="bg-edu-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-rocket mr-2"></i>
              Start Learning
            </button>
            <Link 
              href="/animations"
              className="bg-white hover:bg-edu-gray-50 text-edu-blue px-8 py-4 rounded-xl font-semibold text-lg border-2 border-edu-blue transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <i className="fas fa-play-circle mr-2"></i>
              Watch Demo
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="text-2xl font-bold text-edu-blue mb-1">50+</div>
              <div className="text-sm text-edu-gray-500">Subject Topics</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-2xl font-bold text-edu-green mb-1">100+</div>
              <div className="text-sm text-edu-gray-500">Grammar Rules</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="text-2xl font-bold text-edu-red mb-1">25+</div>
              <div className="text-sm text-edu-gray-500">Animations</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <div className="text-2xl font-bold text-purple-600 mb-1">1000+</div>
              <div className="text-sm text-edu-gray-500">Practice Examples</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-edu-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-edu-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
