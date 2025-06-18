import { Link } from 'wouter';
import { ArrowLeft, Mail, MessageCircle, Phone, HelpCircle, Book, Bug } from 'lucide-react';

export default function SupportPage() {
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
              Support Center
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Need help? We're here to support your learning journey. Choose the best way to get assistance.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Support</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Get detailed help via email. We respond within 24 hours.
                </p>
                <a 
                  href="mailto:support@edusphere.com"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  support@edusphere.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Chat with our support team in real-time.
                </p>
                <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium">
                  Start Chat
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                <Phone className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone Support</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Call us for immediate assistance.
                </p>
                <a 
                  href="tel:+1-800-EDU-HELP"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium"
                >
                  +1-800-EDU-HELP
                </a>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How do I access the study materials?</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Navigate to the "Notes" section from the main menu to access comprehensive study materials for Mathematics, Physics, Chemistry, Biology, and English Grammar. All content is freely available.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Are the 3D animations interactive?</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Yes! Our 3D animations are fully interactive. You can rotate, zoom, and explore various scientific concepts including solar systems, molecular structures, and geometric shapes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Bug className="w-5 h-5 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What if I find an error in the content?</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We appreciate feedback on content accuracy. Please email us at content@edusphere.com with details about the error, and we'll review and correct it promptly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Can I use EduSphere offline?</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Currently, EduSphere requires an internet connection to access all features and content. We're working on offline capabilities for future updates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Is there a mobile app available?</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        EduSphere is fully responsive and works great on mobile devices through your web browser. A dedicated mobile app is planned for future release.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Still need help?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our support team is available Monday to Friday, 9 AM to 6 PM EST. We're committed to helping you succeed in your educational journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:support@edusphere.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Contact Support
                </a>
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