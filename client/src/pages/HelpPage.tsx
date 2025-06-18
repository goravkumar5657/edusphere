import { Link } from 'wouter';
import { ArrowLeft, Search, BookOpen, Lightbulb, Target, Users, Zap } from 'lucide-react';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Help & User Guide
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Welcome to EduSphere! This guide will help you make the most of our educational platform.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Getting Started</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Navigate using the main menu</li>
                  <li>• Browse subjects and topics</li>
                  <li>• Use the search feature to find specific content</li>
                  <li>• Switch between light and dark modes</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                <Search className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Search Features</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Search across all subjects and topics</li>
                  <li>• Filter by difficulty level</li>
                  <li>• Find specific grammar rules or math concepts</li>
                  <li>• Use keywords and tags for better results</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">How to Use Each Section</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Study Notes
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Access comprehensive study materials for Mathematics, Physics, Chemistry, Biology, and more.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Click on any subject card to view available topics</li>
                    <li>• Each topic includes detailed explanations and examples</li>
                    <li>• Use the search bar to find specific concepts quickly</li>
                    <li>• Notes are organized by difficulty level</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    Grammar Lessons
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Master English grammar with comprehensive lessons covering all essential topics.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Learn all 12 tenses with examples</li>
                    <li>• Practice with interactive exercises</li>
                    <li>• Understand parts of speech and sentence structure</li>
                    <li>• Master punctuation and writing rules</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    3D Animations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Explore interactive 3D visualizations to understand complex concepts.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Rotate and zoom 3D models using mouse controls</li>
                    <li>• View solar system, molecular structures, and geometry</li>
                    <li>• Interactive physics simulations</li>
                    <li>• Full-screen mode available for detailed exploration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Study Tips</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                  <Target className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Effective Learning</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Start with beginner-level topics</li>
                    <li>• Practice regularly with provided exercises</li>
                    <li>• Use 3D animations to visualize concepts</li>
                    <li>• Take notes while studying</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-6 rounded-lg border border-teal-200 dark:border-teal-700">
                  <Users className="w-6 h-6 text-teal-600 dark:text-teal-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Study Strategy</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Create a study schedule</li>
                    <li>• Focus on one subject at a time</li>
                    <li>• Review difficult concepts multiple times</li>
                    <li>• Use search to quickly find related topics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Keyboard Shortcuts</h2>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Navigation</h4>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                      <li><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Ctrl + /</kbd> Focus search</li>
                      <li><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Esc</kbd> Close modals</li>
                      <li><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Home</kbd> Go to top</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">3D Controls</h4>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                      <li><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Mouse Drag</kbd> Rotate view</li>
                      <li><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Scroll</kbd> Zoom in/out</li>
                      <li><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">F</kbd> Fullscreen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Need More Help?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you can't find what you're looking for in this guide, our support team is here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/support"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  href="/contact"
                  className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-900 dark:text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Send Feedback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}