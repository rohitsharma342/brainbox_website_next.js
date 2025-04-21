import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import DevicesIcon from '@mui/icons-material/Devices';
import WebIcon from '@mui/icons-material/Web';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebDevelopmentIcon from '@mui/icons-material/WebAsset';

const techStacks = [
  {
    title: 'iOS Development',
    icon: <AppleIcon className="text-white" />,
    bgCard: 'bg-black',
    bulletColor: 'text-blue-400',
    technologies: ['Swift', 'SwiftUI', 'Objective-C'],
  },
  {
    title: 'Android Development',
    icon: <AndroidIcon className="text-white" />,
    bgCard: 'bg-black',
    bulletColor: 'text-green-400',
    technologies: ['Kotlin', 'Java', 'Jetpack Compose'],
  },
  {
    title: 'Cross-Platform',
    icon: <DevicesIcon className="text-white" />,
    bgCard: 'bg-black',
    bulletColor: 'text-purple-400',
    technologies: ['React Native', 'Flutter', 'Xamarin'],
  },
  {
    title: 'Web Development',
    icon: <WebIcon className="text-white" />,
    bgCard: 'bg-black',
    bulletColor: 'text-teal-400',
    technologies: ['React.js', 'Next.js', 'Vue.js', 'HTML', 'CSS'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <CloudIcon className="text-white" />,
    bgCard: 'bg-black',
    bulletColor: 'text-gray-400',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Backend Development',
    icon: <CodeIcon className="text-white" />,
    bgCard: 'bg-black',
    bulletColor: 'text-red-400',
    technologies: ['Node.js', 'Express', 'Python', 'Ruby on Rails'],
  },
  {
    title: 'Database Management',
    icon: <StorageIcon className="text-white" />,
    bgCard: 'bg-black',
    bulletColor: 'text-yellow-400',
    technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'],
  },
  {
    title: 'Web Design & UI/UX',
    icon: <WebDevelopmentIcon className="text-white" />,
    bgCard: 'bg-black',
    bulletColor: 'text-indigo-400',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Tailwind CSS'],
  },
];

export default function Section8() {
  return (
    <section className="bg-white py-16 px-6 text-black">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto text-black">
        <h2 className="text-4xl font-bold tracking-tight max-sm:text-2xl">
          Cutting-Edge Technology Stack
        </h2>
        <p className="mt-4 text-black text-lg max-sm:text-sm">
          We leverage the latest technologies to build robust, scalable, and innovative applications.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {techStacks.map((stack, idx) => (
          <div
            key={idx}
            className={`rounded-lg bg-black hover:bg-linear-to-r from-red-500 to-gray-500 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-4 text-center`}
          >
            <div className="flex justify-center items-center mb-4 bg-white hover:bg-blue-500 bg-opacity-10 p-3 rounded-full w-16 h-16 mx-auto">
              {stack.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-5">{stack.title}</h3>
            <div className="  text-left flex justify-center gap-5 flex-wrap text-gray-300 text-base">
              {stack.technologies.map((tech, techIdx) => (
                <div key={techIdx} className="flex items-start rounded-lg border-2 px-5  border-white">
                  {/* <FiberManualRecordIcon
                    className={`${stack.bulletColor}  mt-1`}
                    style={{ fontSize: '12px' }}
                  /> */}
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-6 py-2 rounded-full shadow-lg transition-all duration-300 max-sm:text-sm max-sm:py-2 max-sm:px-4">
          Discuss Your Tech Requirements →
        </button>
      </div>
    </section>
  );
}
