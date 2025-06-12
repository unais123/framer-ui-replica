import Navigation from '../components/Navigation';
import About from '../components/About';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              About
              <span className="text-yellow-gradient block">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn more about our agency, our mission, and the team behind the creative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Component */}
      <About />

      <Footer />
      <ChatBot />
    </div>
  );
};

export default AboutPage;
