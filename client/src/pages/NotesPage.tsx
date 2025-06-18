import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import NoteCard from '@/components/NoteCard';
import { subjects, Subject } from '@/data/subjects';
import { useSearchState, useSearch } from '@/hooks/useSearch';

const NotesPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const { searchTerm, handleSearch } = useSearchState();

  // Flatten all notes for search
  const allNotes = subjects.flatMap(subject => 
    subject.notes.map(note => ({ ...note, subjectId: subject.id, subjectName: subject.name, subjectColor: subject.color }))
  );

  // Filter by subject first
  const subjectFilteredNotes = selectedSubject === 'all' 
    ? allNotes 
    : allNotes.filter(note => note.subjectId === selectedSubject);

  // Then apply search
  const { filteredItems: filteredNotes } = useSearch(subjectFilteredNotes, searchTerm);

  const getSubjectIcon = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    return subject?.icon || 'fas fa-book';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-edu-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-edu-gray-900 mb-4">
              Subject Notes & Resources
            </h1>
            <p className="text-xl text-edu-gray-500 max-w-2xl mx-auto">
              Comprehensive study materials for all major subjects, written by experts and designed for student success.
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
                    placeholder="Search notes by title, description, or tags..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-edu-gray-50 border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all"
                  />
                  <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-edu-gray-500"></i>
                </div>
              </div>

              {/* Subject Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-edu-gray-50 border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all"
                >
                  <option value="all">All Subjects</option>
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-4 text-sm text-edu-gray-500">
              {searchTerm ? (
                <span>Found {filteredNotes.length} notes matching "{searchTerm}"</span>
              ) : (
                <span>Showing {filteredNotes.length} notes {selectedSubject !== 'all' ? `in ${subjects.find(s => s.id === selectedSubject)?.name}` : 'across all subjects'}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Notes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNotes.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredNotes.map((note) => (
                <NoteCard
                  key={`${note.subjectId}-${note.id}`}
                  note={note}
                  subjectColor={note.subjectColor}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <i className="fas fa-search text-6xl text-edu-gray-200 mb-6"></i>
              <h3 className="text-2xl font-bold text-edu-gray-900 mb-4">No Notes Found</h3>
              <p className="text-edu-gray-500 mb-8">
                {searchTerm 
                  ? `No notes match your search "${searchTerm}". Try different keywords or browse all subjects.`
                  : 'No notes available for the selected subject.'
                }
              </p>
              {searchTerm && (
                <button
                  onClick={() => handleSearch('')}
                  className="bg-edu-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Subject Overview */}
      <section className="py-16 bg-edu-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-edu-gray-900 mb-8 text-center">
            Browse by Subject
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`p-6 rounded-xl transition-all duration-300 text-left ${
                  selectedSubject === subject.id
                    ? 'bg-edu-blue text-white shadow-lg'
                    : 'bg-white hover:shadow-md hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center mb-4">
                  <i className={`${getSubjectIcon(subject.id)} text-2xl mr-3 ${
                    selectedSubject === subject.id ? 'text-white' : 'text-edu-blue'
                  }`}></i>
                  <h3 className="text-lg font-bold">{subject.name}</h3>
                </div>
                <p className={`text-sm mb-3 ${
                  selectedSubject === subject.id ? 'text-blue-100' : 'text-edu-gray-500'
                }`}>
                  {subject.description}
                </p>
                <div className={`text-xs ${
                  selectedSubject === subject.id ? 'text-blue-200' : 'text-edu-gray-400'
                }`}>
                  {subject.notes.length} notes available
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default NotesPage;
