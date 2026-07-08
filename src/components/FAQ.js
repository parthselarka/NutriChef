"use client";

import { ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import Script from "next/script";
import { CONTACT_EMAIL } from "../lib/links";

const FAQS = [
  {
    question: "Is NutriChef available right now?",
    answer:
      "Yes — NutriChef is live on the App Store for iPhone. An Android version is in development; join the waitlist and you’ll be emailed when it’s ready.",
  },
  {
    question: "How does the photo recognition work?",
    answer:
      "Point your camera at your plate and the AI identifies the dish, along with a confidence score so you know how sure it is. You then confirm the portion — quarter, half, three-quarters, full, or exact grams — before the meal is logged. Every value is an estimate you can edit.",
  },
  {
    question: "Does it work for home-cooked Indian food?",
    answer:
      "Yes. NutriChef is designed around Indian meals, including home cooking that has no barcode or menu entry. Snap the plate, adjust the portion, and log it.",
  },
  {
    question: "Is it free?",
    answer:
      "NutriChef is free to download, and core tracking is free to use. Some advanced features may be offered as paid upgrades as the app grows.",
  },
  {
    question: "Does it support vegetarian, vegan, or Jain diets?",
    answer:
      "Yes. Indian vegetarian cuisine is core to the app, and vegan and Jain eating patterns are supported too.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Your health data is stored securely and is never shared with third parties. The full details are in the privacy policy.",
  },
  {
    question: "When is Android coming?",
    answer:
      "It’s in development. We’re not promising a date we can’t keep — waitlist members hear first the moment it ships.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="section scroll-mt-16"
      aria-labelledby="faq-heading"
    >
      <div className="container-page">
        <Script
          id="ld-json-faq"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          })}
        </Script>

        <div className="max-w-2xl">
          <p className="eyebrow reveal">Questions</p>
          <h2
            id="faq-heading"
            className="reveal mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Before you download
          </h2>
        </div>

        <div className="reveal mt-10 max-w-3xl">
          <Accordion.Root type="single" collapsible className="divide-y divide-border border-y border-border">
            {FAQS.map((faq, index) => (
              <Accordion.Item key={faq.question} value={`item-${index}`}>
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-display text-base font-semibold sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className="h-5 w-5 flex-none text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <p className="pb-5 pr-8 leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          <p className="mt-8 text-muted-foreground">
            Something else?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Email us
            </a>{" "}
            — a real person reads every message.
          </p>
        </div>
      </div>
    </section>
  );
}
