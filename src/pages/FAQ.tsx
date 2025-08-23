import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Corporate Profile?",
    answer: "Corporate Profile is a digital platform developed to present information about a company that includes company profile, share ownership structure, individual ownership and sustainability risk assessment of the company.",
    isOpen: true,
  },
  {
    question: "What are the advantages of Corporate Profile?",
    answer: `Corporate Profile presents factual and comprehensive information about Company profile:

1. Company profile
2. Company ownership structure
3. Shareholder / Individual ownership
4. Sustainability Risk Assessment (SRA)`,
    isOpen: true,
  },
  {
    question: "What is the difference between Corporate Profile and other companies?",
    answer: "Corporate Profile provides comprehensive and verified data specifically focused on agricultural companies, with detailed ownership structures and sustainability assessments that are not available elsewhere.",
  },
  {
    question: "How to access a corporate profile of a company?",
    answer: "You can access corporate profiles by using our search function on the homepage or browse through our company directory. Simply enter the company name or browse by location to find detailed profiles.",
  },
  {
    question: "Are corporate profiles available for all industrial sectors?",
    answer: "Currently, our focus is primarily on agricultural companies, particularly those involved in palm oil, agriculture, and related industries across Southeast Asia. We are continuously expanding our coverage.",
  },
  {
    question: "How do you find more information about a company through a corporate profile?",
    answer: "Each corporate profile contains detailed sections including basic company information, ownership structure, shareholder details, subsidiary information, and sustainability risk assessments. You can navigate through different tabs to access comprehensive data.",
  },
  {
    question: "What is SRA?",
    answer: "SRA stands for Sustainability Risk Assessment. It's a comprehensive evaluation system that assesses companies based on their transparency, RSPO compliance, NDPE compliance, and other sustainability criteria to provide stakeholders with insights into environmental and social practices.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our Corporate Profile platform
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="multiple" className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="card-gradient border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <div className="whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for more information about our platform and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-agribiz-blue px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;