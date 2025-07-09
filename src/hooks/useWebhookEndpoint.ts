
import { useEffect } from 'react';

interface WebhookData {
  title?: string;
  excerpt?: string;
  content?: string;
  author?: string;
  date?: string;
  category?: string;
  image?: string;
  readTime?: string;
  tags?: string[];
}

export const useWebhookEndpoint = () => {
  useEffect(() => {
    // Create a simple webhook endpoint simulation
    const handleWebhookRequest = async (event: MessageEvent) => {
      if (event.data && event.data.type === 'webhook-blog-post') {
        console.log('Received webhook data from n8n:', event.data.payload);
        
        // Dispatch custom event to notify components
        const customEvent = new CustomEvent('webhookData', { 
          detail: event.data.payload 
        });
        window.dispatchEvent(customEvent);
      }
    };

    // Listen for postMessage events (for cross-origin webhook simulation)
    window.addEventListener('message', handleWebhookRequest);

    // Also create a global webhook handler function
    (window as any).handleN8nWebhook = (data: WebhookData) => {
      console.log('Direct webhook call from n8n:', data);
      const customEvent = new CustomEvent('webhookData', { detail: data });
      window.dispatchEvent(customEvent);
    };

    return () => {
      window.removeEventListener('message', handleWebhookRequest);
      delete (window as any).handleN8nWebhook;
    };
  }, []);
};
