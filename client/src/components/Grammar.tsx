import { Link } from 'wouter';

const Grammar = () => {
  const grammarTopics = [
    {
      title: "Tenses",
      description: "Master all 12 English tenses with examples and usage patterns.",
      details: ["Present, Past, Future", "Simple, Continuous, Perfect", "Perfect Continuous"],
      icon: "fas fa-clock",
      color: "bg-edu-blue",
      textColor: "text-edu-blue",
      gradientFrom: "from-blue-50",
      gradientTo: "to-indigo-50",
      borderColor: "border-blue-100"
    },
    {
      title: "Modal Verbs",
      description: "Understanding modal verbs and their various uses in English.",
      details: ["Can, Could, May, Might", "Will, Would, Shall, Should", "Must, Ought to"],
      icon: "fas fa-key",
      color: "bg-edu-green",
      textColor: "text-edu-green",
      gradientFrom: "from-emerald-50",
      gradientTo: "to-green-50",
      borderColor: "border-emerald-100"
    },
    {
      title: "Passive Voice",
      description: "Learn to transform active sentences into passive voice correctly.",
      details: ["Active vs Passive", "Formation Rules", "Usage in Different Tenses"],
      icon: "fas fa-exchange-alt",
      color: "bg-purple-600",
      textColor: "text-purple-600",
      gradientFrom: "from-purple-50",
      gradientTo: "to-violet-50",
      borderColor: "border-purple-100"
    },
    {
      title: "Reported Speech",
      description: "Master direct and indirect speech conversion rules.",
      details: ["Direct Speech Rules", "Indirect Speech Conversion", "Tense Changes"],
      icon: "fas fa-quote-left",
      color: "bg-amber-600",
      textColor: "text-amber-600",
      gradientFrom: "from-amber-50",
      gradientTo: "to-orange-50",
      borderColor: "border-amber-100"
    },
    {
      title: "Articles",
      description: "Understand the correct usage of articles A, An, and The.",
      details: ["Definite Article (The)", "Indefinite Articles (A, An)", "Zero Article"],
      icon: "fas fa-font",
      color: "bg-edu-red",
      textColor: "text-edu-red",
      gradientFrom: "from-red-50",
      gradientTo: "to-pink-50",
      borderColor: "border-red-100"
    },
    {
      title: "Parts of Speech",
      description: "Identify and understand the eight parts of speech in English.",
      details: ["Noun, Pronoun, Verb, Adjective", "Adverb, Preposition", "Conjunction, Interjection"],
      icon: "fas fa-list",
      color: "bg-teal-600",
      textColor: "text-teal-600",
      gradientFrom: "from-teal-50",
      gradientTo: "to-cyan-50",
      borderColor: "border-teal-100"
    }
  ];

  return (
    <section id="grammar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-edu-gray-900 mb-4" data-aos="fade-up">
            Master English Grammar
          </h2>
          <p className="text-xl text-edu-gray-500 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive grammar lessons with clear explanations, practical examples, and interactive exercises.
          </p>
        </div>
        
        {/* Grammar Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {grammarTopics.map((topic, index) => (
            <div 
              key={topic.title}
              className={`bg-gradient-to-br ${topic.gradientFrom} ${topic.gradientTo} rounded-2xl p-6 border ${topic.borderColor} hover:shadow-xl transition-all duration-300`} 
              data-aos="fade-up" 
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 ${topic.color} rounded-lg flex items-center justify-center mr-3`}>
                  <i className={`${topic.icon} text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-edu-gray-900">{topic.title}</h3>
              </div>
              <p className="text-edu-gray-500 mb-4">{topic.description}</p>
              <div className="space-y-2 mb-4">
                {topic.details.map((detail, idx) => (
                  <div key={idx} className="text-sm text-edu-gray-900">• {detail}</div>
                ))}
              </div>
              <Link href="/grammar" className={`${topic.textColor} font-semibold hover:opacity-70 transition-colors`}>
                Learn {topic.title} <i className="fas fa-chevron-right ml-1"></i>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Grammar Example Section */}
        <div className="bg-edu-gray-50 rounded-2xl p-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-edu-gray-900 mb-6 text-center">Grammar in Action</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Example 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-edu-blue mb-3">Present Perfect Tense</h4>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-edu-gray-500 uppercase tracking-wide">Structure:</span>
                  <p className="font-mono text-edu-gray-900 bg-edu-gray-100 rounded px-2 py-1 mt-1">Subject + have/has + past participle</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-edu-gray-500 uppercase tracking-wide">Example:</span>
                  <p className="text-edu-gray-900 mt-1">I <span className="font-semibold text-edu-blue">have completed</span> my homework.</p>
                </div>
              </div>
            </div>
            
            {/* Example 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-edu-green mb-3">Modal Verb - Should</h4>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-edu-gray-500 uppercase tracking-wide">Usage:</span>
                  <p className="text-edu-gray-900 mt-1">Advice or recommendation</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-edu-gray-500 uppercase tracking-wide">Example:</span>
                  <p className="text-edu-gray-900 mt-1">You <span className="font-semibold text-edu-green">should</span> study regularly for better results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grammar;
