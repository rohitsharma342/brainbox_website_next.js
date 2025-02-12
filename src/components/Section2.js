import React from "react";
import { FaLightbulb, FaProjectDiagram, FaUniversity, FaBolt } from "react-icons/fa";

const services = [
  {
    icon: <FaLightbulb className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Rapid Prototyping",
    description:
      "Transform your concept into a tangible prototype within weeks. Test, validate, and refine your idea before full development.",
  },
  {
    icon: <FaProjectDiagram className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Product Development",
    description:
      "End-to-end development with a focus on quality, scalability, and user experience. Your dedicated team for the entire journey.",
  },
  {
    icon: <FaUniversity className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Product Consulting",
    description:
      "Strategic guidance to optimize your product lifecycle. We become your trusted tech partner for sustained success.",
  },
  {
    icon: <FaBolt className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Digital Innovation",
    description:
      "Enterprise-focused strategies to accelerate growth and strengthen operations through cutting-edge mobile solutions.",
  },
];

function Section2() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 text-center">
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Transforming Ideas into Powerful Mobile Experiences
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
          Your vision deserves more than just development - it deserves innovation, strategy, and expertise that drives real business growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white p-7 rounded-md shadow-md flex flex-col items-start text-start border hover:shadow-lg transition"
          >
            <div className="bg-blue-100 p-3 rounded-lg mb-4 transition-colors duration-300 group-hover:bg-blue-600">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-blue-600 text-[16px] max-sm:text-[14px] text-white px-8 max-sm:px-4 py-3 max-sm:py-0 rounded-lg hover:bg-blue-700">
          Start Your Innovation Journey →
        </button>
      </div>
    </section>
  );
}

export default Section2;
