"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import Script from "next/script";

export function FAQ() {
  const faqs = [
    {
      question: "When will Nutrichef be available?",
      answer:
        "We're currently in MVP development. Early access will begin in Q2 2025 for waitlist members. Full launch is planned for later in 2025.",
    },
    {
      question: "Will it work for all types of Indian food?",
      answer:
        "Yes! Our database covers North Indian, South Indian, regional specialties, street food, and home-cooked meals. We're continuously expanding based on user feedback.",
    },
    {
      question: "How accurate is the photo recognition?",
      answer:
        "Our AI has been specifically trained on Indian cuisine with over 10,000 dish images. Accuracy improves with each use, and you can always manually adjust portions.",
    },
    {
      question: "Is it free to use?",
      answer:
        "We'll have a free tier with basic features. Premium features like detailed analytics, meal planning, and community access will be available via subscription.",
    },
    {
      question: "Does it support vegetarian/vegan diets?",
      answer:
        "Absolutely! Indian vegetarian cuisine is core to our database. We also support vegan, Jain, and other dietary preferences common in India.",
    },
    {
      question: "Can I track homemade food?",
      answer:
        "Yes! Our AI recognizes homemade Indian dishes. You can also create custom recipes and track family recipes passed down through generations.",
    },
    {
      question: "Will my data be secure?",
      answer:
        "Privacy is paramount. Your health data is encrypted and stored securely. We never share personal information with third parties.",
    },
    {
      question: "Do you support multiple Indian languages?",
      answer:
        "Currently in English, but we're planning Hindi support in the first update, followed by other regional languages based on user demand.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Script
          id="ld-json-faq"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          })}
        </Script>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. If you don't see your question
            here, feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root
            type="single"
            defaultValue="item-0"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Accordion.Item
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md hover:border-primary/20"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full p-6 text-left hover:bg-muted/50 transition-all duration-200 group flex justify-between items-center data-[state=open]:bg-muted/30">
                      <h3 className="text-lg font-semibold pr-4 group-data-[state=open]:text-primary transition-colors duration-200">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-data-[state=open]:text-primary group-data-[state=open]:rotate-180 transition-all duration-300 ease-out flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                    <div className="px-6 pb-6 pt-0 accordion-content">
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:hello@nutrichef.app"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>Get in touch with our team</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
