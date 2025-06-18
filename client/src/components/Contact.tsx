import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // For demo purposes, just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-edu-gray-900 mb-4" data-aos="fade-up">
            Get in Touch
          </h2>
          <p className="text-xl text-edu-gray-500 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Have questions, suggestions, or feedback? We'd love to hear from you and help improve your learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <div className="bg-edu-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-edu-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-edu-gray-900 mb-2">First Name</label>
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
                    <label htmlFor="lastName" className="block text-sm font-medium text-edu-gray-900 mb-2">Last Name</label>
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
                  <label htmlFor="email" className="block text-sm font-medium text-edu-gray-900 mb-2">Email Address</label>
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
                  <label htmlFor="subject" className="block text-sm font-medium text-edu-gray-900 mb-2">Subject</label>
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
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-edu-gray-900 mb-2">Message</label>
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
                  className="w-full bg-edu-blue hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div data-aos="fade-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-edu-gray-900 mb-6">Contact Information</h3>
                <p className="text-edu-gray-500 leading-relaxed mb-8">
                  We're here to help you succeed in your learning journey. Reach out to us through any of the following channels, and we'll get back to you as soon as possible.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-edu-blue rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-edu-gray-900 mb-1">Email Us</h4>
                    <p className="text-edu-gray-500">support@edusphere.com</p>
                    <p className="text-sm text-edu-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-edu-green rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-comments text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-edu-gray-900 mb-1">Live Chat</h4>
                    <p className="text-edu-gray-500">Available 24/7</p>
                    <p className="text-sm text-edu-gray-500">Get instant help from our support team</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-edu-red rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-question-circle text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-edu-gray-900 mb-1">FAQ Section</h4>
                    <p className="text-edu-gray-500">Find quick answers</p>
                    <p className="text-sm text-edu-gray-500">Check our comprehensive FAQ database</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-8 border-t border-edu-gray-200">
                <h4 className="font-semibold text-edu-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
