import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  EduSphere is committed to protecting your privacy. We collect minimal information to provide you with the best educational experience:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Usage data to improve our content and user experience</li>
                  <li>Browser information for compatibility and performance optimization</li>
                  <li>Anonymized analytics to understand content preferences</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We use collected information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Enhance your learning experience</li>
                  <li>Improve our educational content and features</li>
                  <li>Analyze usage patterns to optimize performance</li>
                  <li>Provide technical support when needed</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. Data Security
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Encrypted data transmission</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. Third-Party Services
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  EduSphere may use third-party services for analytics and performance monitoring. These services have their own privacy policies and data handling practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. Your Rights
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request data correction or deletion</li>
                  <li>Opt-out of data collection</li>
                  <li>Contact us regarding privacy concerns</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. Contact Us
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at privacy@edusphere.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}