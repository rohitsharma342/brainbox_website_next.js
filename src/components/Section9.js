"use client"
import React, { useState } from "react";

function Section9() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What mobile app development services do you offer?",
      answer: "We offer end-to-end mobile app development services, including design, development, testing, and deployment.",
    },
    {
      question: "What software development services do you offer?",
      answer: "Our software development services include custom software solutions, web development, and enterprise software.",
    },
    {
      question: "What is the average cost and timeline for developing a mobile app?",
      answer: "The cost and timeline vary based on project requirements. Typically, it ranges from 2-6 months.",
    },
    {
      question: "How do you ensure the security and quality of the software you develop?",
      answer: "We implement best practices like code reviews, automated testing, and security audits to ensure quality and security.",
    },
    {
      question: "Do you offer app maintenance and support services?",
      answer: "Yes, we provide ongoing app maintenance and support to ensure your app stays updated and functional.",
    },
    {
      question: "Do you assist with software integration and data migration?",
      answer: "Absolutely! We offer seamless software integration and data migration services.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section mt-10">
      <h1 className="font-bold max-sm:text-2xl">Frequently Asked Questions</h1>
      <div className="faq-container lg:px-28 max-sm:px-2 mt-10 max-sm:mt-5">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item ">
            <div className="faq-question text-sm " onClick={() => toggleAnswer(index)} aria-expanded={activeIndex === index}>
              {item.question}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            <div className={`faq-answer text-sm ${activeIndex === index ? "open" : ""}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-20" />
    </div>
  );
}

export default Section9;
