import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { Users, Store, HelpCircle, CreditCard } from "lucide-react";

type Category = "all" | "customers" | "shops" | "general" | "payment";

interface FAQ {
  question: string;
  answer: string;
  category: Category;
}

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories = [
    { id: "all" as Category, label: "All Questions", icon: HelpCircle },
    { id: "customers" as Category, label: "For Customers", icon: Users },
    { id: "shops" as Category, label: "For Shops", icon: Store },
    { id: "general" as Category, label: "General", icon: HelpCircle },
    { id: "payment" as Category, label: "Payment", icon: CreditCard },
  ];

  const faqs: FAQ[] = [
    // Customer FAQs
    {
      question: "How does Bidawrap work?",
      answer: "Submit a bid request with your vehicle details and service needs. Local shops in our network will review your request and send you competitive bids. You can then compare quotes and choose the shop that best fits your needs and budget.",
      category: "customers",
    },
    {
      question: "Is Bidawrap free to use?",
      answer: "Yes! Bidawrap is completely free for customers. There are no hidden fees, commissions, or charges. Simply submit your request and receive competitive bids at no cost.",
      category: "customers",
    },
    {
      question: "How many bids will I receive?",
      answer: "You'll typically receive 3-5 bids from qualified shops in your area. The exact number depends on the service requested and availability of shops in your location.",
      category: "customers",
    },
    {
      question: "How long does it take to receive bids?",
      answer: "Most customers receive their first bids within 24 hours. All bids are typically received within 2-3 business days.",
      category: "customers",
    },
    {
      question: "What if I'm not satisfied with the bids?",
      answer: "You're under no obligation to accept any bid. If none of the quotes work for you, you can either adjust your request and resubmit, or simply decline all bids.",
      category: "customers",
    },
    {
      question: "Can I communicate with shops directly?",
      answer: "Yes! Once you receive bids, you can message shops directly through our platform to ask questions, request additional photos of their work, or schedule consultations.",
      category: "customers",
    },

    // Shop FAQs
    {
      question: "How do I join as a shop partner?",
      answer: "Click on 'Join Our Network' and fill out the application form. Our team will review your submission and verify your business credentials. Once approved, you can start bidding on customer requests.",
      category: "shops",
    },
    {
      question: "Are there any fees or commissions?",
      answer: "No! Bidawrap charges zero commissions. Unlike other platforms, we don't take a cut from your earnings. You keep 100% of what you quote to customers.",
      category: "shops",
    },
    {
      question: "How do I receive customer requests?",
      answer: "Once verified, you'll receive notifications when customers in your area submit requests that match your services. You can review the details and submit your bid directly through the platform.",
      category: "shops",
    },
    {
      question: "What is the verification process?",
      answer: "We verify your business credentials, insurance, licenses, and review your portfolio. This process typically takes 24-48 hours. Verification ensures quality and builds trust with customers.",
      category: "shops",
    },
    {
      question: "Can I set my service area?",
      answer: "Yes! You can specify which areas you serve and what types of services you offer. You'll only receive notifications for requests that match your preferences.",
      category: "shops",
    },
    {
      question: "How do I manage my bids?",
      answer: "Your shop dashboard provides a simple interface to view active bids, communicate with customers, track your bid history, and manage your profile. You can access it 24/7 from any device.",
      category: "shops",
    },

    // General FAQs
    {
      question: "What services can I request bids for?",
      answer: "We support requests for PPF (Paint Protection Film), color change wraps, business/branding wraps, custom graphics, window tinting, ceramic coating, chrome delete, and more.",
      category: "general",
    },
    {
      question: "Are the shops verified?",
      answer: "Yes, all shops in our network are verified. We check their business credentials, insurance, licenses, and review their portfolio before approving them to bid on requests.",
      category: "general",
    },
    {
      question: "What areas do you serve?",
      answer: "Bidawrap operates nationwide with shops in major cities and surrounding areas. When you submit a request, we'll show you available shops in your specific location.",
      category: "general",
    },
    {
      question: "How is Bidawrap different from other platforms?",
      answer: "Unlike traditional lead-generation sites, Bidawrap charges zero commissions to shops, which means better pricing for customers. We're built by industry professionals with 25+ years of experience, focusing on transparency and fairness.",
      category: "general",
    },
    {
      question: "Is my information secure?",
      answer: "Absolutely. We use industry-standard encryption and security measures to protect your personal and business information. We never share your data with third parties without your consent.",
      category: "general",
    },

    // Payment FAQs
    {
      question: "How do I pay for services?",
      answer: "Payment is arranged directly between you and the shop you choose. Bidawrap does not process payments. You can discuss payment terms, methods, and schedules directly with your chosen shop.",
      category: "payment",
    },
    {
      question: "When do I pay?",
      answer: "Payment terms are agreed upon between you and the shop. Some shops require deposits, while others accept payment upon completion. This is discussed when you accept a bid.",
      category: "payment",
    },
    {
      question: "What payment methods are accepted?",
      answer: "Each shop sets their own accepted payment methods. Most accept cash, credit cards, and bank transfers. You can confirm payment options when communicating with shops.",
      category: "payment",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No. Bidawrap is completely free for customers. The price you see in the bid is what you pay to the shop. There are no platform fees, service charges, or hidden costs.",
      category: "payment",
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "Cancellation and rescheduling policies vary by shop. We recommend discussing this directly with your chosen shop before accepting a bid. Most shops are flexible and understanding.",
      category: "payment",
    },
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 gradient-text">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about Bidawrap
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg scale-105"
                          : "bg-card border border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{category.label}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive 
                          ? "bg-primary-foreground/20" 
                          : "bg-muted"
                      }`}>
                        {category.id === "all" 
                          ? faqs.length 
                          : faqs.filter(faq => faq.category === category.id).length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No questions found in this category.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:support@bidawrap.com" 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Email Support
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="px-6 py-3 bg-card border border-border rounded-lg font-semibold hover:border-primary/50 transition-colors"
                >
                  Call Us
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Response time: Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;