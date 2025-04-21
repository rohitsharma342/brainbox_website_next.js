import React from "react";
import { FaSlidersH, FaFlask, FaPuzzlePiece, FaBolt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import AccordionUsage from "./Accordian";

const services = [
  {
    icon: <FaSlidersH className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Rapid Prototyping",
    description:
      "Experience the power of rapid iteration and validation. We transform your concept into an interactive prototype within weeks, allowing you to:",
    points: [
      {title:"Deliverables",
        values:[
          "Clickable prototype with real user flows",
          "High-fidelity UI designs + raw design files",
          "Scope of work + detailed feature list (SRS)",
          "Ready-to-build foundation for dev teams  ",
          "Trello board for real-time tracking"
        ]
      },
      {title:"Ideal For",
        values:[
          "Early-stage startups",
          "Founders with just an idea",
          "Pre-investor presentations",
          "Stakeholder demos & approvals",
        ]
      },
      {title:"Our AI Companion in Action",
        values:[
          "Early-stage startups",
          "Founders with just an idea",
          "Pre-investor presentations",
          "Stakeholder demos & approvals",
        ]
      },
    ],
  },
  {
    icon: <FaFlask className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Product Development",
    description:
      "Full-cycle development that brings your vision to life. Our expert team ensures:",
      points: [
        {title:"Deliverables",
          values:[
            "Clickable prototype with real user flows",
            "High-fidelity UI designs + raw design files",
            "Scope of work + detailed feature list (SRS)",
            "Ready-to-build foundation for dev teams  ",
            "Trello board for real-time tracking"
          ]
        }
      ],
  },
  {
    icon: <FaPuzzlePiece className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Product Consulting",
    description:
      "Strategic guidance for optimal product lifecycle management. We help you:",
      points: [
        {title:"Deliverables",
          values:[
            "Clickable prototype with real user flows",
            "High-fidelity UI designs + raw design files",
            "Scope of work + detailed feature list (SRS)",
            "Ready-to-build foundation for dev teams  ",
            "Trello board for real-time tracking"
          ]
        }
      ],
  },
  {
    icon: <FaBolt className="group-hover:text-white text-blue-500 text-2xl transition-colors duration-300" />,
    title: "Digital Innovation & Strategy",
    description:
      "Enterprise-focused solutions that drive growth. We deliver:",
      points: [
        {title:"Deliverables",
          values:[
            "Clickable prototype with real user flows",
            "High-fidelity UI designs + raw design files",
            "Scope of work + detailed feature list (SRS)",
            "Ready-to-build foundation for dev teams  ",
            "Trello board for real-time tracking"
          ]
        }
      ],
  },
];

function Section4() {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="lg:text-4xl font-bold max-sm:leading-7 text-gray-900">Our Services</h2>
        <p className="text-gray-600 text-xl lg:w-[50%] mx-auto text-center mt-2">
          Your success is our priority. We offer end-to-end mobile app development services tailored to your unique vision and goals.
        </p>
      </div>
      <div className="columns-1 md:columns-2 gap-6 max-w-6xl mx-auto">
  {services.map((service, index) => (
    <div
      key={index}
      className="group mb-6 bg-gradient-to-r from-blue-50 to-blue-0 border border-gray-100 hover:border-blue-200 rounded-lg p-8 text-start transition break-inside-avoid"
    >
      <div className="flex gap-5">
        <div className="bg-blue-100 p-3 rounded-md flex items-center justify-center self-start shrink-0 transition-colors duration-300 group-hover:bg-blue-600">
          {service.icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {service.title}
          </h3>
          <p className="mt-5 text-start text-gray-600">
            {service.description}
          </p>
          <ul className="text-gray-600 mt-4 space-y-2">
            <AccordionUsage services={service.points} />
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>



      <div className="text-center mt-10">
        <button className="bg-blue-600 text-[16px] max-sm:text-[14px] text-white px-8 max-sm:px-4 py-4 max-sm:py-0 rounded-lg hover:bg-blue-700">
          Discuss Your Project →
        </button>
      </div>
    </div>
  );
}

export default Section4;
