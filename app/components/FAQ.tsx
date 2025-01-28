"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type FAQ = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

const FAQs: FAQ[] = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "How does useState work? How does useState work? How does useState work? ",
    answer: "useState is a React hook that allows you to add state to a functional component. useState is a React hook that allows you to add state to a functional component. useState is a React hook that allows you to add state to a functional component.",
  },
  {
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It allows you to write HTML in React.",
  },
];

const FAQItem: React.FC<FAQ> = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={``}>
      <button
        onClick={toggleOpen}
        className={`transition-all duration-200 py-6 px-4 flex justify-between items-center w-full text-lg font-medium rounded-lg bg-neutral-900`}
      >
        <h3 className="text-left">{question}</h3>
        <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <IoIosArrowDown />
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="py-6 px-4 mt-1 rounded-lg bg-neutral-900">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQList: React.FC = () => {
  return (
    <section className="py-28 max-w-5xl flex flex-col items-center mx-auto">
      <div>
        <h2 className="text-6xl leading-normal">Frequently Asked Questions</h2>
      </div>
      <div className="mt-8 mx-6 max-w-2xl md:mx-auto flex flex-col gap-y-4">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </section>
  )
}

export default FAQList;