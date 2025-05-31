
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "/placeholder.svg",
      rating: 5,
      review: "Outstanding work on our website redesign! The team delivered exactly what we needed and more. Our conversion rates have increased by 40% since the launch.",
      company: "TechStart Inc."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      image: "/placeholder.svg",
      rating: 5,
      review: "The AI automation solutions they implemented have revolutionized our workflow. We're saving 15 hours per week on repetitive tasks. Highly recommended!",
      company: "Digital Solutions Co."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      image: "/placeholder.svg",
      rating: 5,
      review: "From branding to social media management, they've transformed our online presence. Our engagement has tripled and we're getting more customers than ever.",
      company: "Bloom Boutique"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "E-commerce Manager",
      image: "/placeholder.svg",
      rating: 5,
      review: "Their product photography and video production services are top-notch. The quality of visuals has significantly improved our product sales.",
      company: "Urban Lifestyle"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Restaurant Owner",
      image: "/placeholder.svg",
      rating: 5,
      review: "The Google Ads campaign they created brought us 200% more customers in just 3 months. Professional, responsive, and results-driven team!",
      company: "Taste of Asia"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-gray-400" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-gray-200 text-gray-600">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business and deliver exceptional results.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
