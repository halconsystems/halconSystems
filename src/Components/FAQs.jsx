import React, { useState } from "react";

const FAQs = () => {
  const faqData = [
    {
      question: "What industries do you serve?",
      answer:
        "We serve clients across industries, including technology, healthcare, finance, retail, and more.",
    },
    {
      question: "Can your solutions scale with my business?",
      answer:
        "Yes, our solutions are built with scalability in mind to support your growth at every stage.",
    },
    {
      question: "How do you ensure security and reliability?",
      answer:
        "We follow industry best practices, conduct regular audits, and use modern technologies to ensure top-notch security and reliability.",
    },
    {
      question: "Do you offer dedicated teams for ongoing projects?",
      answer:
        "Absolutely! We provide dedicated development teams for businesses looking for long-term collaboration.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-10">
      <h1 className="text-6xl font-bold">FAQs</h1>
      <p className="text-gray-700 text-2xl mt-5 w-full lg:w-8/12">
        Find clear, concise answers about our services, processes, and how we
        help businesses achieve their goals.
      </p>

      <div className="space-y-8 mt-10">
        {faqData.map((faq, index) => (
          <div key={index} className="border-t pt-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-2xl font-medium"
            >
              {faq.question}
              {openIndex === index ? (
                <span className="text-[#F39C12] text-3xl">−</span>
              ) : (
                <span className="text-[#F39C12] text-3xl">+</span>
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-xl text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
