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
    question: "What exactly does FirstCustomer.ai do?",
    answer:
      "It simulates your startup's early journey by letting you talk to AI-generated users, pitch to virtual investors, and test marketing ideas — before building anything.",
    value: "item-1",
  },
  {
    question: "Do I need to have a finished idea or product to use it?",
    answer:
      "Nope. All you need is a rough one-liner about your idea — our system expands it into a detailed simulation with target users, pain points, and objections.",
    value: "item-2",
  },
  {
    question: "Is this meant to replace customer interviews?",
    answer:
      "Not entirely. FirstCustomer helps you practice and sharpen your idea before real interviews — like a flight simulator for founders.",
    value: "item-3",
  },
  {
    question: "Can I export the results or use them in a pitch deck?",
    answer:
      "Yes. With the Pro plan, you can export user insights, pitch feedback, and marketing summaries as shareable reports or slides.",
    value: "item-4",
  },
  {
    question: "How accurate are the simulations?",
    answer:
      "They're powered by GPT and grounded in startup best practices. While not real users, they mimic realistic objections, curiosity, and investor skepticism.",
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
