// File: /pages/index.jsx or /pages/Home.jsx
"use client";
import { useEffect, useRef } from "react";
import { Section1 } from "@/components/Section1";
import Section10 from "@/components/Section10";
import Section from "@/components/Section";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import Section2 from "@/components/Section2";
import Section11 from "@/components/Section11";
import Section5Copy from "@/components/Section5Copy";
import SectionCopy from "@/components/SectionCopy";
import { Hero } from "@/components/Hero";

export default function Home() {
  const sectionCopyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When SectionCopy is mostly visible, lock global scrolling
          if (entry.target === sectionCopyRef.current) {
            if (entry.intersectionRatio >= 0.5) {
              document.body.style.overflow = "hidden";
            } else {
              document.body.style.overflow = "";
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionCopyRef.current) {
      observer.observe(sectionCopyRef.current);
    }

    return () => {
      if (sectionCopyRef.current) {
        observer.unobserve(sectionCopyRef.current);
      }
      // Cleanup on unmount
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div className="text-center mt-10">
        
        <Hero />
        <Section1/>
        {/* <Section2 /> */}
        <Section4 />
        {/* <Section /> */}
        {/* Other sections before SectionCopy */}
        <SectionCopy ref={sectionCopyRef} />
        {/* Other sections after SectionCopy */}
        <Section3 />
        <Section11 />
        <Section5 />
        {/* <Section5Copy /> */}
        {/* <Section6 /> */}
        <Section8 />
        <Section7 />
        <Section9 />
        <Section10 />
      </div>
    </>
  );
}
