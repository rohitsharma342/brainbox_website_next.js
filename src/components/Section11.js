import React from "react";
import { FaUsers, FaShieldAlt, FaBolt, FaCheck } from "react-icons/fa";

const services = [
  {
    icon: <FaUsers className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Dedicated Team Model",
    description:
      "Your vision deserves undivided attention. Get a dedicated team that works exclusively on your project, fully aligned with your goals and timeline.",
    points: ["Direct Communication", "Flexible Scaling", "Full Project Ownership"],
  },
  {
    icon: <FaShieldAlt className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Transparent Development",
    description:
      "Stay informed and in control throughout the development process with real-time updates and clear communication channels.",
    points: ["Regular Updates", "Progress Tracking", "Open Communication"],
  },
  {
    icon: <FaBolt className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Long-term Growth Focus",
    description:
      "We're committed to your app's success beyond launch, providing ongoing support and strategic guidance for sustainable growth.",
    points: ["Continuous Support", "Performance Monitoring", "Strategic Updates"],
  },
];

function Section11() {
  return (
    <div className="py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Beyond Development: A True Partnership
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          We don't just build apps; we build lasting relationships that drive your business forward.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div key={index} className="group bg-white text-start shadow-sm hover:shadow-md rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition">
            {/* Icon with Light Background */}
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4 transition-colors duration-300 group-hover:bg-blue-600">
              {service.icon}
            </div>

            {/* Service Content */}
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>

            {/* Bullet Points */}
            <ul className="text-gray-600 mt-4 space-y-2">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheck className="text-blue-500 text-sm transition-colors duration-300 " /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section11;
