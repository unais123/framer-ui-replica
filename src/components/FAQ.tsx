
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 200);
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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What services does ATUA AGENCY offer?",
      answer: "We offer comprehensive digital services including Web Design & Development, AI Automation, Branding, Digital Marketing, Social Media Management, Product Photography, and Video Production."
    },
    {
      question: "How long does it take to complete a website project?",
      answer: "Project timelines vary based on complexity and requirements. A basic website typically takes 2-4 weeks, while complex e-commerce or custom applications may take 6-12 weeks. We provide detailed timelines during our consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer ongoing support and maintenance packages to ensure your website stays updated, secure, and performing optimally. Our support includes regular updates, security monitoring, and technical assistance."
    },
    {
      question: "What is AI Automation and how can it help my business?",
      answer: "AI Automation involves using intelligent systems to streamline repetitive tasks, improve efficiency, and reduce manual work. We implement solutions using n8n and other platforms to automate workflows, integrate systems, and boost productivity by up to 80%."
    },
    {
      question: "What are your payment terms?",
      answer: "We require an upfront advance as per the signed proposal. Remaining payments are due on milestone or completion basis. We accept various payment methods and provide detailed invoices for all transactions."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Absolutely! We provide comprehensive digital marketing services including SEO optimization, Meta (Facebook/Instagram) ads, Google Ads management, and strategic marketing campaigns to maximize your online presence and ROI."
    },
    {
      question: "Do you work with clients outside of Mangalore?",
      answer: "Yes, while we're based in Mangalore, Karnataka, we work with clients across India and internationally. We conduct meetings virtually and have successfully delivered projects for clients worldwide."
    },
    {
      question: "What makes ATUA AGENCY different from other agencies?",
      answer: "We combine creativity with data-driven insights, specialize in AI automation solutions, maintain 98% client satisfaction, and provide 24/7 AI support. Our team focuses on delivering results that drive real business growth."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services and processes
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0" style={{ color: '#FF9F04' }}>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
