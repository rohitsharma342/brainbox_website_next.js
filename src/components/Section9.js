"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Section9() {
  const [openIndexes, setOpenIndexes] = useState({});

  const faqData = [
    {
      question: "What mobile app development services do you offer?",
      answer:
        "We offer end-to-end mobile app development services, including design, development, testing, and deployment.",
    },
    {
      question: "What software development services do you offer?",
      answer:
        "Our software development services include custom software solutions, web development, and enterprise software.",
    },
    {
      question: "What is the average cost and timeline for developing a mobile app?",
      answer:
        "The cost and timeline vary based on project requirements. Typically, it ranges from 2-6 months.",
    },
    {
      question: "How do you ensure the security and quality of the software you develop?",
      answer:
        "We implement best practices like code reviews, automated testing, and security audits to ensure quality and security.",
    },
    {
      question: "Do you offer app maintenance and support services?",
      answer:
        "Yes, we provide ongoing app maintenance and support to ensure your app stays updated and functional.",
    },
    {
      question: "Do you assist with software integration and data migration?",
      answer:
        "Absolutely! We offer seamless software integration and data migration services.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-white py-12  max-sm:px-1 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 max-sm:text-2xl">
        Frequently Asked Questions
      </h2>

      <div className="mt-10 columns-1 lg:columns-2 max-sm:columns-1 space-y-5 max-sm:w-[95%]  lg:gap-10">
        {faqData.map((item, index) => {
          const isOpen = openIndexes[index];

          return (
            <div
              key={index}
              className="border  border-gray-200 rounded-xl shadow-sm transition-all duration-300 ease-in-out bg-gray-50 hover:shadow-md"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-[100%] text-left flex justify-between items-center p-3 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-gray-800 font-medium text-lg">
                  {item.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              <div
                className={`px-5 pt-0 pb-5 text-gray-600 text-sm transition-all duration-400 ease-in-out ${
                  isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>

      <hr className="mt-16 border-gray-200" />
    </div>
  );
}

export default Section9;
