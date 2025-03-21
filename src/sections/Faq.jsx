import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi"; // React Icons

const faqs = [
  {
    id: 1,
    question: "What​ Is Included​ In Your Web Development Service?",
    answer:
      "We use modern technologies such​ as WordPress, HTML5,  CSS3, JavaScript, PHP, and  MySQL​ to ensure your website​ is scalable, secure, and responsive.",
  },
  {
    id: 2,
    question: "What Technologies​ Do You Use For Web Development?",
    answer:
      "We use modern technologies such​ as WordPress, HTML5,  CSS3, JavaScript, PHP, and  MySQL​ to ensure your website​ is scalable, secure, and responsive.",
  },
  {
    id: 3,
    question: "What​ If​ I Need Ongoing Support﻿ After The Website​ Is Launched?",
    answer: "Yes, we offer 24/7 customer support through chat and email.",
  },
  {
    id: 4,
    question: "Can​ I Customize​ My Website According​ To​ My Business Needs?",
    answer:
      "Yes, you can update your shipping address before the order is shipped.",
  },
  {
    question: "Do You﻿ Offer Seo Services​ As Part​ Оf Your Web Development?",
    answer: "We accept credit/debit cards, PayPal, and bank transfers.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-[#0A2C8C] mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md cursor-pointer"
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center p-4 text-lg font-medium transition-colors duration-300 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`flex items-center ${
                    openIndex === index ? "text-[#0A2C8C]" : "text-gray-800"
                  }`}
                >
                  <span className="text-[#0A2C8C] mr-2">0{faq.id}</span>{" "}
                  {faq.question}
                </span>
                <span>
                  {openIndex === index ? (
                    <FiX className="text-xl text-[#0A2C8C]" />
                  ) : (
                    <FiPlus className="text-xl text-gray-800" />
                  )}
                </span>
              </button>

              {/* Answer (Show only if open) */}
              {openIndex === index && (
                <div className="p-4 border-t border-gray-300 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
