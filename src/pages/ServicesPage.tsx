
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to help your business grow and succeed in the modern landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services isHomePage={false} />

      <Footer />
    </div>
  );
};

export default ServicesPage;
