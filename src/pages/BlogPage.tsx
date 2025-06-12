
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import Blog from '../components/Blog';

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              Our
              <span className="text-yellow-gradient block">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and tips from the world of digital innovation.
            </p>
          </div>
        </div>
      </section>

      <Blog />

      <Footer />
      <ChatBot />
    </div>
  );
};

export default BlogPage;
