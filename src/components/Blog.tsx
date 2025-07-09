import { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import WebhookManager from './WebhookManager';
import { useWebhookEndpoint } from '../hooks/useWebhookEndpoint';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showWebhookManager, setShowWebhookManager] = useState(false);

  // Initialize webhook endpoint
  useWebhookEndpoint();

  // Initial blog posts
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "The Future of AI Automation in Business",
      excerpt: "Discover how AI automation is transforming businesses and how you can leverage it to streamline your operations and boost productivity.",
      content: "Artificial Intelligence automation is revolutionizing how businesses operate...",
      author: "ATUA Team",
      date: "2024-01-15",
      category: "AI Automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read",
      tags: ["AI", "Automation", "Business"]
    },
    {
      id: 2,
      title: "Modern Web Design Trends That Convert",
      excerpt: "Explore the latest web design trends that not only look great but also drive conversions and improve user experience.",
      content: "In today's digital landscape, web design goes beyond aesthetics...",
      author: "Design Team",
      date: "2024-01-10",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read",
      tags: ["Web Design", "UX/UI", "Conversions"]
    },
    {
      id: 3,
      title: "Building Your Brand Identity: A Complete Guide",
      excerpt: "Learn how to create a strong brand identity that resonates with your audience and sets you apart from the competition.",
      content: "Brand identity is more than just a logo and colors...",
      author: "Branding Team",
      date: "2024-01-05",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read",
      tags: ["Branding", "Identity", "Marketing"]
    },
    {
      id: 4,
      title: "Digital Marketing Strategies That Work",
      excerpt: "Effective digital marketing strategies to grow your online presence and reach your target audience in 2024.",
      content: "Digital marketing continues to evolve rapidly...",
      author: "Marketing Team",
      date: "2024-01-03",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read",
      tags: ["Digital Marketing", "SEO", "Social Media"]
    },
    {
      id: 5,
      title: "SEO Best Practices for 2024",
      excerpt: "Stay ahead of the curve with the latest SEO strategies and techniques to improve your search engine rankings.",
      content: "Search Engine Optimization remains crucial for online visibility...",
      author: "SEO Team",
      date: "2024-01-01",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8a2c293?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read",
      tags: ["SEO", "Google", "Rankings"]
    },
    {
      id: 6,
      title: "Product Photography That Sells",
      excerpt: "Professional tips and techniques for product photography that captures attention and drives sales.",
      content: "Great product photography is essential for e-commerce success...",
      author: "Photography Team",
      date: "2023-12-28",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read",
      tags: ["Photography", "E-commerce", "Products"]
    }
  ]);

  const handleNewPost = (newPost: BlogPost) => {
    setBlogPosts(prevPosts => [newPost, ...prevPosts]);
  };

  const categories = ["All", "AI Automation", "Web Development", "Branding", "Digital Marketing", "SEO", "Photography", "Automation"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Webhook Management Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowWebhookManager(!showWebhookManager)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm"
          >
            <Settings size={16} />
            {showWebhookManager ? 'Hide' : 'Show'} Webhook Settings
          </button>
        </div>

        {/* Webhook Manager */}
        {showWebhookManager && (
          <div className="mb-8">
            <WebhookManager onNewPost={handleNewPost} />
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-[#FF9F04] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF9F04] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-[#FF9F04] transition-colors duration-200">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 font-space">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Transform your business with our comprehensive digital services. From web development to AI automation, we've got you covered.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-[#FF9F04] hover:bg-[#e8900a] text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
