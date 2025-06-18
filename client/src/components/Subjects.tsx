import { Link } from 'wouter';

const Subjects = () => {
  const subjects = [
    {
      name: "Mathematics",
      description: "Algebra, Geometry, Calculus, Statistics, and more",
      topics: 15,
      icon: "fas fa-calculator",
      color: "blue",
      bgColor: "bg-blue-100",
      hoverColor: "group-hover:bg-blue-200",
      textColor: "text-edu-blue"
    },
    {
      name: "Science",
      description: "Physics, Chemistry, Biology, Environmental Science",
      topics: 12,
      icon: "fas fa-flask",
      color: "green",
      bgColor: "bg-green-100",
      hoverColor: "group-hover:bg-green-200",
      textColor: "text-edu-green"
    },
    {
      name: "History",
      description: "World History, Ancient Civilizations, Modern Era",
      topics: 10,
      icon: "fas fa-landmark",
      color: "amber",
      bgColor: "bg-amber-100",
      hoverColor: "group-hover:bg-amber-200",
      textColor: "text-amber-600"
    },
    {
      name: "Computer Science",
      description: "Programming, Algorithms, Data Structures, Web Dev",
      topics: 18,
      icon: "fas fa-code",
      color: "purple",
      bgColor: "bg-purple-100",
      hoverColor: "group-hover:bg-purple-200",
      textColor: "text-purple-600"
    },
    {
      name: "English",
      description: "Literature, Writing, Reading Comprehension",
      topics: 14,
      icon: "fas fa-book",
      color: "red",
      bgColor: "bg-red-100",
      hoverColor: "group-hover:bg-red-200",
      textColor: "text-edu-red"
    },
    {
      name: "Geography",
      description: "Physical Geography, Human Geography, Maps",
      topics: 8,
      icon: "fas fa-globe-americas",
      color: "teal",
      bgColor: "bg-teal-100",
      hoverColor: "group-hover:bg-teal-200",
      textColor: "text-teal-600"
    },
    {
      name: "Economics",
      description: "Microeconomics, Macroeconomics, Trade",
      topics: 9,
      icon: "fas fa-chart-line",
      color: "indigo",
      bgColor: "bg-indigo-100",
      hoverColor: "group-hover:bg-indigo-200",
      textColor: "text-indigo-600"
    },
    {
      name: "Art & Design",
      description: "Visual Arts, Design Principles, Art History",
      topics: 7,
      icon: "fas fa-palette",
      color: "pink",
      bgColor: "bg-pink-100",
      hoverColor: "group-hover:bg-pink-200",
      textColor: "text-pink-600"
    }
  ];

  return (
    <section id="subjects" className="py-20 bg-edu-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-edu-gray-900 mb-4" data-aos="fade-up">
            Subject Notes & Resources
          </h2>
          <p className="text-xl text-edu-gray-500 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive study materials for all major subjects, written by experts and designed for student success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div 
              key={subject.name}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group" 
              data-aos="fade-up" 
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className={`w-12 h-12 ${subject.bgColor} rounded-xl flex items-center justify-center mb-4 ${subject.hoverColor} transition-colors`}>
                <i className={`${subject.icon} ${subject.textColor} text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-edu-gray-900 mb-2">{subject.name}</h3>
              <p className="text-edu-gray-500 text-sm mb-4">{subject.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-edu-gray-500">{subject.topics} Topics</span>
                <Link href="/notes" className={`${subject.textColor} hover:opacity-70 transition-colors`}>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/notes"
            className="bg-edu-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            View All Subjects <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
