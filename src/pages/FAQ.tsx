import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";

const FAQ = () => {
  const faqs = [
    {
      question: "How does WrapBid work?",
      answer: "Submit a bid request with your vehicle details and service needs. Local shops in our network will review your request and send you competitive bids. You can then compare quotes and choose the shop that best fits your needs and budget.",
    },
    {
      question: "Is WrapBid free to use?",
      answer: "Yes! WrapBid is completely free for customers. We make money by charging shops a small fee for leads, which allows us to keep the platform free for vehicle owners.",
    },
    {
      question: "How many bids will I receive?",
      answer: "You'll typically receive 3-5 bids from qualified shops in your area. The exact number depends on the service requested and availability of shops in your location.",
    },
    {
      question: "Are the shops verified?",
      answer: "Yes, all shops in our network are verified. We check their business credentials, insurance, and review their portfolio before approving them to bid on requests.",
    },
    {
      question: "How long does it take to receive bids?",
      answer: "Most customers receive their first bids within 24 hours. All bids are typically received within 2-3 business days.",
    },
    {
      question: "What services can I request bids for?",
      answer: "We support requests for PPF (Paint Protection Film), color wraps, business/branding wraps, custom graphics, window tinting, ceramic coating, and more.",
    },
    {
      question: "Can I communicate with shops directly?",
      answer: "Yes! Once you receive bids, you can message shops directly through our platform to ask questions, request additional photos of their work, or schedule consultations.",
    },
    {
      question: "What if I'm not satisfied with the bids?",
      answer: "You're under no obligation to accept any bid. If none of the quotes work for you, you can either adjust your request and resubmit, or simply decline all bids.",
    },
  ];

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 gradient-text">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about WrapBid
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <p className="text-lg">
              Contact us at{" "}
              <a href="mailto:support@wrapbid.com" className="text-primary hover:underline">
                support@wrapbid.com
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default FAQ;
