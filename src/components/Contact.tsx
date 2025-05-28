
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hello@portfolio.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      content: "123 Creative Street, Design City, DC 12345",
      description: "Visit our creative studio"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Get In
              <span className="text-gradient block">Touch</span>
            </h2>
          </div>
          <div className="animate-on-scroll">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="animate-on-scroll mb-8">
              <h3 className="text-2xl font-semibold mb-6 font-space">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're here to help you bring your ideas to life. Whether you have a specific project in mind or just want to explore possibilities, we're excited to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-gray-700 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-900 mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-gray-600">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                Business Hours
              </h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="brand-design">Brand Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 font-medium"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
