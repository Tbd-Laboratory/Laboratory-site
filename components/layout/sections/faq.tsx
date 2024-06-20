import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What types of projects does the laboratory focus on?",
    answer: "We focus on infrastructure, emerging technologies and developer tools, creating innovative open-source solutions to enhance the internet and digital infrastructure.",
    value: "item-1",
  },
  {
    question: "How can I get started with contributing?",
    answer:
      "Join our community, chat, set up your development environment, and begin contributing.",
    value: "item-2",
  },
  {
    question:
      "Can I propose a new project idea?",
    answer:
      "Yes, we encourage community members to propose new project ideas. You can submit your ideas through our project proposal process outlined on our website.",
    value: "item-3",
  },
  {
    question: "Is there any support available for contributors?",
    answer: "Yes, we offer extensive documentation, community forums, mentorship programs, and regular workshops to support our contributors.",
    value: "item-4",
  },
  {
    question:
      "How can I collaborate or form a partnership with the laboratory?",
    answer: "To collaborate or form a partnership with our laboratory, please reach out to us through our contact form or email us at Arnx5533@gmail.com. We welcome opportunities to work with individuals, organisations, and institutions on innovative open-source projects.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
