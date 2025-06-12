
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ChatBot from '../components/ChatBot';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              Get In
              <span className="text-yellow-gradient block">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Let's start a conversation about your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      <Footer />
      <ChatBot />
    </div>
  );
};

export default ContactPage;
