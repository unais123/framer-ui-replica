
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import AIAutomation from '../components/AIAutomation';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <AIAutomation />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
