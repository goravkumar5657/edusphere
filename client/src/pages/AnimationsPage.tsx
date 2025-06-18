import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ThreeAnimations from '@/components/ThreeAnimations';

const AnimationsPage = () => {
  const [selectedAnimation, setSelectedAnimation] = useState<'solar-system' | 'molecule' | 'geometry' | 'physics'>('solar-system');

  const animations = [
    {
      id: 'solar-system' as const,
      title: 'Solar System',
      description: 'Interactive 3D model of our solar system with planets orbiting the sun',
      category: 'Astronomy',
      icon: 'fas fa-sun',
      color: 'amber',
      details: 'Explore the planets in our solar system, their relative sizes, orbital speeds, and distances from the sun. This animation demonstrates the concept of orbital mechanics and planetary motion.'
    },
    {
      id: 'molecule' as const,
      title: 'Water Molecule',
      description: '3D visualization of H2O molecular structure and chemical bonds',
      category: 'Chemistry',
      icon: 'fas fa-flask',
      color: 'blue',
      details: 'Understanding molecular structure through 3D visualization. See how hydrogen and oxygen atoms bond to form water molecules, with accurate bond angles and atomic sizes.'
    },
    {
      id: 'geometry' as const,
      title: 'Geometric Shapes',
      description: 'Collection of 3D geometric shapes demonstrating spatial relationships',
      category: 'Mathematics',
      icon: 'fas fa-cube',
      color: 'green',
      details: 'Interactive geometric shapes including cubes, spheres, cones, and more complex polyhedra. Perfect for understanding 3D geometry, surface areas, and volume concepts.'
    },
    {
      id: 'physics' as const,
      title: 'Pendulum Motion',
      description: 'Physics simulation showing pendulum motion and harmonic oscillation',
      category: 'Physics',
      icon: 'fas fa-circle',
      color: 'purple',
      details: 'Real-time physics simulation of a pendulum showing concepts of gravity, momentum, energy conservation, and harmonic motion. Watch how the pendulum gradually loses energy due to friction.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; hover: string; text: string; border: string }> = {
      amber: { 
        bg: 'bg-amber-50', 
        hover: 'hover:bg-amber-100', 
        text: 'text-amber-600', 
        border: 'border-amber-200' 
      },
      blue: { 
        bg: 'bg-blue-50', 
        hover: 'hover:bg-blue-100', 
        text: 'text-blue-600', 
        border: 'border-blue-200' 
      },
      green: { 
        bg: 'bg-green-50', 
        hover: 'hover:bg-green-100', 
        text: 'text-green-600', 
        border: 'border-green-200' 
      },
      purple: { 
        bg: 'bg-purple-50', 
        hover: 'hover:bg-purple-100', 
        text: 'text-purple-600', 
        border: 'border-purple-200' 
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const currentAnimation = animations.find(anim => anim.id === selectedAnimation);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-edu-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-edu-gray-900 mb-4">
              Interactive 3D Animations
            </h1>
            <p className="text-xl text-edu-gray-500 max-w-2xl mx-auto">
              Visual learning through interactive 3D animations, diagrams, and simulations that make complex concepts easy to understand.
            </p>
          </div>
        </div>
      </section>

      {/* Animation Viewer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Animation Selection Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-edu-gray-900 mb-6">Choose Animation</h2>
              <div className="space-y-4">
                {animations.map((animation) => {
                  const colors = getColorClasses(animation.color);
                  const isSelected = selectedAnimation === animation.id;
                  
                  return (
                    <button
                      key={animation.id}
                      onClick={() => setSelectedAnimation(animation.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        isSelected 
                          ? `${colors.bg} ${colors.border} ring-2 ring-edu-blue` 
                          : `bg-white hover:bg-gray-50 border-gray-200 ${colors.hover}`
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isSelected ? colors.text.replace('text-', 'bg-') + ' text-white' : `${colors.bg} ${colors.text}`
                        }`}>
                          <i className={animation.icon}></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-edu-gray-900 mb-1">{animation.title}</h3>
                          <p className="text-sm text-edu-gray-500 mb-2">{animation.category}</p>
                          <p className="text-xs text-edu-gray-400 line-clamp-2">{animation.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Animation Display */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                {/* Animation Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      currentAnimation ? getColorClasses(currentAnimation.color).bg : 'bg-blue-50'
                    }`}>
                      <i className={`${currentAnimation?.icon} text-2xl ${
                        currentAnimation ? getColorClasses(currentAnimation.color).text : 'text-blue-600'
                      }`}></i>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-edu-gray-900">{currentAnimation?.title}</h2>
                      <p className="text-edu-gray-500">{currentAnimation?.category}</p>
                    </div>
                  </div>
                  <p className="text-edu-gray-600">{currentAnimation?.details}</p>
                </div>

                {/* Animation Canvas */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black" style={{ height: '500px' }}>
                  <ThreeAnimations type={selectedAnimation} />
                  
                  {/* Controls Overlay */}
                  <div className="absolute top-4 right-4 bg-black/50 rounded-lg p-3">
                    <div className="text-white text-sm space-y-1">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-mouse-pointer text-xs"></i>
                        <span>Click and drag to rotate</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-search-plus text-xs"></i>
                        <span>Scroll to zoom</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animation Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-edu-gray-900 mb-3">About This Animation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedAnimation === 'solar-system' && (
                      <>
                        <div>
                          <h4 className="font-semibold text-edu-gray-900 mb-2">Educational Concepts:</h4>
                          <ul className="text-sm text-edu-gray-600 space-y-1">
                            <li>• Orbital mechanics and planetary motion</li>
                            <li>• Relative sizes and distances of planets</li>
                            <li>• Gravitational forces and elliptical orbits</li>
                            <li>• Day/night cycle and rotation periods</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-edu-gray-900 mb-2">Interactive Features:</h4>
                          <ul className="text-sm text-edu-gray-600 space-y-1">
                            <li>• Real-time planetary movement</li>
                            <li>• Accurate orbital speeds</li>
                            <li>• 3D perspective viewing</li>
                            <li>• Visual orbital paths</li>
                          </ul>
                        </div>
                      </>
                    )}

                    {selectedAnimation === 'molecule' && (
                      <>
                        <div>
                          <h4 className="font-semibold text-edu-gray-900 mb-2">Chemical Concepts:</h4>
                          <ul className="text-sm text-edu-gray-600 space-y-1">
                            <li>• Molecular structure and bonding</li>
                            <li>• Covalent bonds in water molecules</li>
                            <li>• Atomic sizes and electron sharing</li>
                            <li>• 3D molecular geometry</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-edu-gray-900 mb-2">Molecular Details:</h4>
                          <ul className="text-sm text-edu-gray-600 space-y-1">
                            <li>• H-O-H bond angle: ~104.5°</li>
                            <li>• Oxygen (red) and Hydrogen (white)</li>
                            <li>• Polar molecule properties</li>
                            <li>• Chemical formula: H₂O</li>
                          </ul>
                        </div>
                      </>
                    )}

                    {selectedAnimation === 'geometry' && (
                      <>
                        <div>
                          <h4 className="font-semibold text-edu-gray-900 mb-2">Geometric Concepts:</h4>
                          <ul className="text-sm text-edu-gray-600 space-y-1">
                            <li>• 3D shape recognition and properties</li>
                            <li>• Spatial relationships and symmetry</li>
                            <li>• Volume and surface area concepts</li>
                            <li>• Geometric transformations</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-edu-gray-900 mb-2">Shape Collection:</h4>
                          <ul className="text-sm text-edu-gray-600 space-y-1">
                            <li>• Cube (6 equal square faces)</li>
                            <li>• Sphere (perfect round shape)</li>
                            <li>• Cone (circular base, pointed top)</li>
                            <li>• Octahedron (8 triangular faces)</li>
                            <li>• Torus (donut shape)</li>
                          </ul>
                        </div>
                      </>
                    )}

                    {selectedAnimation === 'physics' && (
                      <>
                        <div>
                          <h4 className="font-semibold text-edu-gray-900 mb-2">Physics Principles:</h4>
                          <ul className="text-sm text-edu-gray-600 space-y-1">
                            <li>• Simple harmonic motion</li>
                            <li>• Gravitational force effects</li>
                            <li>• Energy conservation (kinetic ↔ potential)</li>
                            <li>• Damping and friction effects</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-edu-gray-900 mb-2">Real-world Applications:</h4>
                          <ul className="text-sm text-edu-gray-600 space-y-1">
                            <li>• Clock mechanisms</li>
                            <li>• Metronomes in music</li>
                            <li>• Earthquake detection</li>
                            <li>• Building oscillation analysis</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-edu-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-edu-gray-900 mb-4">
              Why Interactive 3D Learning?
            </h2>
            <p className="text-xl text-edu-gray-500">
              Visual learning enhances understanding and retention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <i className="fas fa-eye text-3xl text-blue-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">Visual Understanding</h3>
              <p className="text-sm text-edu-gray-600">Complex concepts become clear when visualized in 3D space.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <i className="fas fa-hand-pointer text-3xl text-green-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">Interactive Learning</h3>
              <p className="text-sm text-edu-gray-600">Hands-on interaction improves engagement and memory retention.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <i className="fas fa-clock text-3xl text-purple-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">Real-time Simulation</h3>
              <p className="text-sm text-edu-gray-600">Watch processes unfold in real-time to understand dynamics.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <i className="fas fa-brain text-3xl text-amber-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">Better Retention</h3>
              <p className="text-sm text-edu-gray-600">Multi-sensory learning leads to improved knowledge retention.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AnimationsPage;
