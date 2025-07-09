
import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

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

interface WebhookManagerProps {
  onNewPost: (post: BlogPost) => void;
}

const WebhookManager = ({ onNewPost }: WebhookManagerProps) => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Generate a unique webhook URL for this session
    const sessionId = Math.random().toString(36).substring(7);
    const baseUrl = window.location.origin;
    const generatedUrl = `${baseUrl}/webhook/blog/${sessionId}`;
    setWebhookUrl(generatedUrl);
    
    // Start listening for webhook data
    startWebhookListener();
  }, []);

  const startWebhookListener = () => {
    setIsListening(true);
    
    // Listen for custom events that will be triggered by webhook calls
    const handleWebhookData = (event: CustomEvent) => {
      console.log('Received webhook data:', event.detail);
      
      const newPost: BlogPost = {
        id: Date.now(),
        title: event.detail.title || 'New Blog Post',
        excerpt: event.detail.excerpt || 'A new blog post has been added.',
        content: event.detail.content || 'Blog content will be displayed here.',
        author: event.detail.author || 'ATUA Team',
        date: event.detail.date || new Date().toISOString().split('T')[0],
        category: event.detail.category || 'General',
        image: event.detail.image || 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b81d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        readTime: event.detail.readTime || '5 min read',
        tags: event.detail.tags || ['New', 'Blog']
      };
      
      onNewPost(newPost);
      
      toast({
        title: "New Blog Post Received!",
        description: `"${newPost.title}" has been added to the blog.`,
      });
    };

    window.addEventListener('webhookData', handleWebhookData as EventListener);
    
    return () => {
      window.removeEventListener('webhookData', handleWebhookData as EventListener);
    };
  };

  const testWebhook = () => {
    // Simulate receiving webhook data for testing
    const testData = {
      title: "Test Blog Post from n8n",
      excerpt: "This is a test blog post received via webhook from n8n automation.",
      content: "This content was automatically generated and sent via webhook...",
      author: "n8n Automation",
      date: new Date().toISOString().split('T')[0],
      category: "Automation",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "3 min read",
      tags: ["Automation", "n8n", "Webhook"]
    };

    const event = new CustomEvent('webhookData', { detail: testData });
    window.dispatchEvent(event);
  };

  const copyWebhookUrl = () => {
    navigator.clipboard.writeText(webhookUrl);
    toast({
      title: "Webhook URL Copied!",
      description: "Use this URL in your n8n workflow to send blog posts.",
    });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Webhook Integration</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Webhook URL for n8n
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={webhookUrl}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm"
            />
            <button
              onClick={copyWebhookUrl}
              className="px-4 py-2 bg-[#FF9F04] text-white rounded-md hover:bg-[#e8900a] transition-colors text-sm"
            >
              Copy URL
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Use this URL in your n8n workflow to automatically add blog posts
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isListening ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600">
              {isListening ? 'Listening for webhooks' : 'Not listening'}
            </span>
          </div>
          
          <button
            onClick={testWebhook}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
          >
            Test Webhook
          </button>
        </div>

        <div className="bg-blue-50 p-3 rounded-md">
          <h4 className="font-medium text-blue-900 mb-2">n8n Webhook Setup:</h4>
          <ol className="text-sm text-blue-800 space-y-1">
            <li>1. Copy the webhook URL above</li>
            <li>2. In n8n, add a "Webhook" node</li>
            <li>3. Set the webhook URL and method to POST</li>
            <li>4. Send blog data with fields: title, excerpt, content, author, category, image, tags</li>
            <li>5. Your blog will automatically update when n8n sends data</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WebhookManager;
