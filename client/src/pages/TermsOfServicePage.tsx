import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  By accessing and using EduSphere, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. Use License
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of EduSphere materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. Educational Content
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  EduSphere provides educational content for learning purposes. While we strive for accuracy:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Content is provided "as is" without warranties</li>
                  <li>Users should verify information from multiple sources</li>
                  <li>We are not responsible for academic decisions based on our content</li>
                  <li>Content may be updated or modified without notice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. User Conduct
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Users agree to use EduSphere responsibly and not to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Engage in any unlawful or prohibited activities</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Use automated systems to access the site excessively</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  All content on EduSphere, including text, graphics, logos, and software, is the property of EduSphere or its content suppliers and protected by copyright laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  EduSphere shall not be liable for any damages arising from the use or inability to use our educational materials, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. Modifications
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  EduSphere may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. Contact Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  For questions about these Terms of Service, please contact us at terms@edusphere.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}