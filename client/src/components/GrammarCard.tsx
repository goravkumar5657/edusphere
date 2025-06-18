import { useState } from 'react';
import { GrammarRule } from '@/data/grammar';

interface GrammarCardProps {
  rule: GrammarRule;
  topicColor: string;
}

const GrammarCard = ({ rule, topicColor }: GrammarCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-600 bg-green-100';
      case 'Intermediate':
        return 'text-yellow-600 bg-yellow-100';
      case 'Advanced':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'text-blue-600 hover:text-blue-700 border-blue-200',
      green: 'text-green-600 hover:text-green-700 border-green-200',
      amber: 'text-amber-600 hover:text-amber-700 border-amber-200',
      purple: 'text-purple-600 hover:text-purple-700 border-purple-200',
      red: 'text-red-600 hover:text-red-700 border-red-200',
      teal: 'text-teal-600 hover:text-teal-700 border-teal-200'
    };
    return colorMap[color] || 'text-blue-600 hover:text-blue-700 border-blue-200';
  };

  const formatExplanation = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/^-\s+(.*)$/gm, '<li class="ml-4">$1</li>')
      .replace(/^\d+\.\s+(.*)$/gm, '<li class="ml-4 list-decimal">$1</li>')
      .split('\n\n')
      .map(paragraph => `<p class="mb-3">${paragraph}</p>`)
      .join('');
  };

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 ${getColorClasses(topicColor).split(' ')[2]}`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{rule.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{rule.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(rule.difficulty)}`}>
          {rule.difficulty}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {rule.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="mb-6 space-y-4">
          {/* Explanation */}
          <div className="prose prose-sm max-w-none">
            <div 
              className="text-gray-700 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatExplanation(rule.explanation) }}
            />
          </div>

          {/* Examples */}
          {rule.examples.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
              <div className="space-y-3">
                {rule.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                      <div className="flex-1">
                        <p className="text-green-700 font-medium text-sm">{example.correct}</p>
                        {example.incorrect && (
                          <div className="flex items-start space-x-2 mt-2">
                            <i className="fas fa-times-circle text-red-500 mt-0.5"></i>
                            <p className="text-red-700 text-sm line-through">{example.incorrect}</p>
                          </div>
                        )}
                        <p className="text-gray-600 text-xs mt-2">{example.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exercises */}
          {rule.exercises && rule.exercises.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Practice Exercises:</h4>
              <div className="space-y-2">
                {rule.exercises.map((exercise, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-blue-500 font-medium text-sm">{index + 1}.</span>
                    <p className="text-gray-700 text-sm">{exercise}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`font-medium transition-colors ${getColorClasses(topicColor).split(' ')[0]} ${getColorClasses(topicColor).split(' ')[1]}`}
        >
          {isExpanded ? 'Show Less' : 'Learn More'} <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} ml-1`}></i>
        </button>
        
        <div className="flex space-x-2">
          <span className="text-xs text-gray-500">
            {rule.examples.length} examples
          </span>
          {rule.exercises && (
            <span className="text-xs text-gray-500">
              • {rule.exercises.length} exercises
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GrammarCard;
