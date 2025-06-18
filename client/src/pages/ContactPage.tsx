import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.firstName.trim()) {
      errors.push('First name is required');
    }
    
    if (!formData.lastName.trim()) {
      errors.push('Last name is required');
    }
    
    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!formData.message.trim()) {
      errors.push('Message is required');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      alert('Please fix the following errors:\n' + errors.join('\n'));
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-edu-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-edu-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-edu-gray-500 max-w-2xl mx-auto">
              Have questions, suggestions, or feedback? We'd love to hear from you and help improve your learning experience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted && (
            <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <i className="fas fa-check-circle text-3xl text-green-600 mb-3"></i>
              <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
              <p className="text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="bg-edu-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-edu-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-edu-gray-900 mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all" 
                        placeholder="John" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-edu-gray-900 mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all" 
                        placeholder="Doe" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-edu-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all" 
                      placeholder="john.doe@example.com" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-edu-gray-900 mb-2">
                      Subject
                    </label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Content Request">Content Request</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Bug Report">Bug Report</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-edu-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all resize-none" 
                      placeholder="Tell us how we can help you..." 
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-edu-blue hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div data-aos="fade-left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-edu-gray-900 mb-6">Contact Information</h2>
                  <p className="text-edu-gray-500 leading-relaxed mb-8">
                    We're here to help you succeed in your learning journey. Reach out to us through any of the following channels, and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-edu-blue rounded-xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-edu-gray-900 mb-1">Email Us</h3>
                      <p className="text-edu-gray-500">support@edusphere.com</p>
                      <p className="text-sm text-edu-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-edu-green rounded-xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-comments text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-edu-gray-900 mb-1">Live Chat</h3>
                      <p className="text-edu-gray-500">Available 24/7</p>
                      <p className="text-sm text-edu-gray-500">Get instant help from our support team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-edu-red rounded-xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-question-circle text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-edu-gray-900 mb-1">FAQ Section</h3>
                      <p className="text-edu-gray-500">Find quick answers</p>
                      <p className="text-sm text-edu-gray-500">Check our comprehensive FAQ database</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-edu-gray-900 mb-1">Response Time</h3>
                      <p className="text-edu-gray-500">Monday - Friday: 9 AM - 6 PM EST</p>
                      <p className="text-sm text-edu-gray-500">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="pt-8 border-t border-edu-gray-200">
                  <h3 className="font-semibold text-edu-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                      aria-label="YouTube"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-edu-gray-900 mb-3">
                    <i className="fas fa-info-circle text-blue-600 mr-2"></i>
                    Quick Response Tips
                  </h3>
                  <ul className="text-sm text-edu-gray-600 space-y-2">
                    <li>• Include your email address for faster response</li>
                    <li>• Be specific about the issue or question</li>
                    <li>• Mention which device/browser you're using</li>
                    <li>• Check our FAQ before submitting common questions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-edu-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-edu-gray-900 mb-4">
              How We Can Help You
            </h2>
            <p className="text-xl text-edu-gray-500">
              Our support team is here to assist with all your learning needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <i className="fas fa-graduation-cap text-3xl text-blue-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">Academic Support</h3>
              <p className="text-sm text-edu-gray-600">Get help understanding complex topics and concepts</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <i className="fas fa-cog text-3xl text-green-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">Technical Issues</h3>
              <p className="text-sm text-edu-gray-600">Resolve any technical problems with the platform</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <i className="fas fa-plus text-3xl text-purple-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">Content Requests</h3>
              <p className="text-sm text-edu-gray-600">Suggest new topics or request additional materials</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <i className="fas fa-lightbulb text-3xl text-amber-600 mb-4"></i>
              <h3 className="font-bold text-edu-gray-900 mb-2">Feedback</h3>
              <p className="text-sm text-edu-gray-600">Share your ideas to help us improve EduSphere</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;
