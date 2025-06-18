import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import GrammarCard from '@/components/GrammarCard';
import { grammarTopics } from '@/data/grammar';
import { useSearchState, useSearch } from '@/hooks/useSearch';

const GrammarPage = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const { searchTerm, handleSearch } = useSearchState();

  // Flatten all grammar rules for search
  const allRules = grammarTopics.flatMap(topic => 
    topic.rules.map(rule => ({ 
      ...rule, 
      topicId: topic.id, 
      topicName: topic.name, 
      topicColor: topic.color,
      topicIcon: topic.icon
    }))
  );

  // Apply filters
  let filteredRules = allRules;

  if (selectedTopic !== 'all') {
    filteredRules = filteredRules.filter(rule => rule.topicId === selectedTopic);
  }

  if (selectedDifficulty !== 'all') {
    filteredRules = filteredRules.filter(rule => rule.difficulty === selectedDifficulty);
  }

  // Apply search
  const { filteredItems: searchedRules } = useSearch(filteredRules, searchTerm);

  const getTopicGradient = (color: string) => {
    const gradientMap: Record<string, string> = {
      blue: 'from-blue-50 to-indigo-50 border-blue-100',
      green: 'from-emerald-50 to-green-50 border-emerald-100',
      purple: 'from-purple-50 to-violet-50 border-purple-100',
      amber: 'from-amber-50 to-orange-50 border-amber-100',
      red: 'from-red-50 to-pink-50 border-red-100',
      teal: 'from-teal-50 to-cyan-50 border-teal-100'
    };
    return gradientMap[color] || 'from-blue-50 to-indigo-50 border-blue-100';
  };

  const getTopicIconColor = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-edu-blue',
      green: 'bg-edu-green',
      purple: 'bg-purple-600',
      amber: 'bg-amber-600',
      red: 'bg-edu-red',
      teal: 'bg-teal-600'
    };
    return colorMap[color] || 'bg-edu-blue';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-edu-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-edu-gray-900 mb-4">
              Master English Grammar
            </h1>
            <p className="text-xl text-edu-gray-500 max-w-2xl mx-auto">
              Comprehensive grammar lessons with clear explanations, practical examples, and interactive exercises.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search grammar rules by title, description, or tags..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-edu-gray-50 border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all"
                  />
                  <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-edu-gray-500"></i>
                </div>
              </div>

              {/* Topic Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-3 bg-edu-gray-50 border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all"
                >
                  <option value="all">All Topics</option>
                  {grammarTopics.map((topic) => (
                    <option key={topic.id} value={topic.id}>
                      {topic.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-3 bg-edu-gray-50 border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all"
                >
                  <option value="all">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-4 text-sm text-edu-gray-500">
              {searchTerm ? (
                <span>Found {searchedRules.length} grammar rules matching "{searchTerm}"</span>
              ) : (
                <span>
                  Showing {searchedRules.length} grammar rules
                  {selectedTopic !== 'all' && ` in ${grammarTopics.find(t => t.id === selectedTopic)?.name}`}
                  {selectedDifficulty !== 'all' && ` (${selectedDifficulty} level)`}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Grammar Rules Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchedRules.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {searchedRules.map((rule) => (
                <GrammarCard
                  key={`${rule.topicId}-${rule.id}`}
                  rule={rule}
                  topicColor={rule.topicColor}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <i className="fas fa-search text-6xl text-edu-gray-200 mb-6"></i>
              <h3 className="text-2xl font-bold text-edu-gray-900 mb-4">No Grammar Rules Found</h3>
              <p className="text-edu-gray-500 mb-8">
                {searchTerm 
                  ? `No grammar rules match your search "${searchTerm}". Try different keywords or browse all topics.`
                  : 'No grammar rules match your current filters.'
                }
              </p>
              {(searchTerm || selectedTopic !== 'all' || selectedDifficulty !== 'all') && (
                <button
                  onClick={() => {
                    handleSearch('');
                    setSelectedTopic('all');
                    setSelectedDifficulty('all');
                  }}
                  className="bg-edu-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Grammar Topics Overview */}
      <section className="py-16 bg-edu-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-edu-gray-900 mb-8 text-center">
            Grammar Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grammarTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`bg-gradient-to-br ${getTopicGradient(topic.color)} rounded-2xl p-6 border hover:shadow-xl transition-all duration-300 text-left ${
                  selectedTopic === topic.id ? 'ring-2 ring-edu-blue shadow-lg' : ''
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 ${getTopicIconColor(topic.color)} rounded-lg flex items-center justify-center mr-3`}>
                    <i className={`${topic.icon} text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-edu-gray-900">{topic.name}</h3>
                </div>
                <p className="text-edu-gray-500 mb-4">{topic.description}</p>
                <div className="text-xs text-edu-gray-400">
                  {topic.rules.length} rules • {topic.rules.reduce((total, rule) => total + rule.examples.length, 0)} examples
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grammar Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-edu-gray-900 mb-4">
              Grammar Learning Tips
            </h2>
            <p className="text-xl text-edu-gray-500">
              Effective strategies to master English grammar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <i className="fas fa-book-reader text-3xl text-blue-600 mb-4"></i>
              <h3 className="font-bold text-gray-900 mb-2">Practice Regularly</h3>
              <p className="text-sm text-gray-600">Consistent daily practice leads to better retention and understanding.</p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <i className="fas fa-comments text-3xl text-green-600 mb-4"></i>
              <h3 className="font-bold text-gray-900 mb-2">Use in Context</h3>
              <p className="text-sm text-gray-600">Apply grammar rules in real conversations and writing exercises.</p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <i className="fas fa-lightbulb text-3xl text-purple-600 mb-4"></i>
              <h3 className="font-bold text-gray-900 mb-2">Learn Patterns</h3>
              <p className="text-sm text-gray-600">Focus on understanding patterns rather than memorizing rules.</p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-6 text-center">
              <i className="fas fa-check-circle text-3xl text-amber-600 mb-4"></i>
              <h3 className="font-bold text-gray-900 mb-2">Review Mistakes</h3>
              <p className="text-sm text-gray-600">Learn from errors to avoid repeating the same mistakes.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default GrammarPage;
