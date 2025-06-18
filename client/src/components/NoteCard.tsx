import { useState } from 'react';
import { SubjectNote } from '@/data/subjects';

interface NoteCardProps {
  note: SubjectNote;
  subjectColor: string;
}

const NoteCard = ({ note, subjectColor }: NoteCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDownload = () => {
    // Create a blob with the note content
    const blob = new Blob([note.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${note.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
      blue: 'text-blue-600 hover:text-blue-700',
      green: 'text-green-600 hover:text-green-700',
      amber: 'text-amber-600 hover:text-amber-700',
      purple: 'text-purple-600 hover:text-purple-700',
      red: 'text-red-600 hover:text-red-700',
      teal: 'text-teal-600 hover:text-teal-700',
      indigo: 'text-indigo-600 hover:text-indigo-700',
      pink: 'text-pink-600 hover:text-pink-700'
    };
    return colorMap[color] || 'text-blue-600 hover:text-blue-700';
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{note.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{note.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(note.difficulty)}`}>
          {note.difficulty}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {note.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Content Preview */}
      <div className="mb-4">
        {isExpanded ? (
          <div className="prose prose-sm max-w-none">
            <div 
              className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: note.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>')
                  .replace(/^# (.*$)/gm, '<h1 class="text-lg font-bold mb-2">$1</h1>')
                  .replace(/^## (.*$)/gm, '<h2 class="text-md font-semibold mb-2">$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3 class="text-sm font-medium mb-1">$1</h3>')
              }}
            />
          </div>
        ) : (
          <p className="text-gray-600 text-sm line-clamp-3">
            {note.content.replace(/[#*`]/g, '').substring(0, 150)}...
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`font-medium transition-colors ${getColorClasses(subjectColor)}`}
        >
          {isExpanded ? 'Show Less' : 'Read More'} <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} ml-1`}></i>
        </button>
        
        <button
          onClick={handleDownload}
          className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
        >
          <i className="fas fa-download mr-2"></i>
          Download
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
