
import { useState } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Mock blog posts - in a real app, this would come from n8n/Supabase
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and design websites.",
      content: "Artificial Intelligence is transforming web development in unprecedented ways...",
      author: "ATUA Team",
      date: "2024-01-15",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read",
      tags: ["AI", "Web Development", "Technology"]
    },
    {
      id: 2,
      title: "Design Trends That Will Define 2024",
      excerpt: "A comprehensive look at the design trends that are shaping the digital landscape this year.",
      content: "As we move through 2024, several design trends are emerging...",
      author: "Design Team",
      date: "2024-01-10",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read",
      tags: ["Design", "Trends", "UI/UX"]
    },
    {
      id: 3,
      title: "Building Scalable Mobile Applications",
      excerpt: "Best practices and strategies for creating mobile apps that can grow with your business.",
      content: "Scalability is a crucial consideration when developing mobile applications...",
      author: "Mobile Team",
      date: "2024-01-05",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read",
      tags: ["Mobile", "Development", "Scalability"]
    }
  ];

  const categories = ["All", "AI & Technology", "Design", "Mobile Development", "Marketing"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-black text-white"
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
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
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
                <CardTitle className="text-xl group-hover:text-yellow-600 transition-colors duration-200">
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

        {/* N8N Integration Notice */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 font-space">
              Content Management
            </h3>
            <p className="text-gray-600 mb-6">
              This blog is powered by n8n automation workflows for seamless content management and publishing.
            </p>
            <div className="text-sm text-gray-500">
              To enable full n8n integration, please connect your Supabase backend for secure API handling.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
