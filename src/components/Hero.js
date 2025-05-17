"use client";
import React from "react";
import { useState, useEffect } from "react";
import { SparklesCore } from "./ui/sparkles";
import GoogleIcon from '@mui/icons-material/Google';
import { motion, AnimatePresence } from "framer-motion";
import StarIcon from '@mui/icons-material/Star';
import { Montserrat, Lora } from 'next/font/google'
const words = ["Vision", "Ideas", "Thoughts"];
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-montserrat',
  })
  
  const lora = Lora({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal', 'italic'],
    variable: '--font-lora',
  })
export function Hero() {
    
  const [index, setIndex] = useState(0);
  const videoRef = React.useRef(null);
  const textSectionRef = React.useRef(null);
  const [startTextAnimation, setStartTextAnimation] = React.useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Custom smooth scroll function
  function slowScrollToElement(element, duration = 1500, offset = 0, onComplete) {
    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY + offset;
    const change = end - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + change * easeInOutQuad(progress));
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else if (onComplete) {
        onComplete();
      }
    }
    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    requestAnimationFrame(animateScroll);
  }

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => {
      if (textSectionRef.current) {
        slowScrollToElement(textSectionRef.current, 1500, 43, () => setStartTextAnimation(true));
      }
    };
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <>
      <div className="relative -mt-10  w-full h-[100vh] ">
        <video
          ref={videoRef}
          className="w-full h-full  object-cover"
          autoPlay={true}
          muted
          loop={false}
          playsInline
        >
          <source src="../basket.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Animated Text Section */}
      <div ref={textSectionRef}>
        <AnimatedTextSection start={startTextAnimation} />
      </div>
    </>
  );
}

// AnimatedTextSection component
function AnimatedTextSection({ start }) {
  const lines = [
    { text: 'Scoring feels good...', className: 'text-4xl font-semibold text-center mb-2 font-montserrat', style: {fontFamily: montserrat.style.fontFamily} },
    { text: '...But is that your real goal?', className: 'italic text-3xl text-center mb-6 font-lora', style: {fontFamily: lora.style.fontFamily} },
    { text: 'Your true win is launching your startup idea into the world.', className: 'text-4xl font-bold text-center mb-10 font-montserrat', style: {fontFamily: montserrat.style.fontFamily} },
  ];
  const buttonText = "READY FOR YOUR MOMENT? LET'S BUILD IT TOGETHER";

  const [visibleLine, setVisibleLine] = React.useState(0);
  const [revealed, setRevealed] = React.useState([0]);
  const [buttonVisible, setButtonVisible] = React.useState(false);

  React.useEffect(() => {
    if (!start) {
      setVisibleLine(0);
      setRevealed([0]);
      setButtonVisible(false);
      return;
    }
    setVisibleLine(0);
    setRevealed([0]);
    setButtonVisible(false);
  }, [start]);

  React.useEffect(() => {
    if (!start) return;
    if (visibleLine < lines.length) {
      const timeout = setTimeout(() => {
        setRevealed((prev) => [...prev, visibleLine + 1]);
        setVisibleLine(visibleLine + 1);
      }, lines[visibleLine].text.length * 50 + 500); // Wait for line animation + pause
      return () => clearTimeout(timeout);
    } else if (visibleLine === lines.length) {
      // Show button after last line
      const btnTimeout = setTimeout(() => setButtonVisible(true), 400);
      return () => clearTimeout(btnTimeout);
    }
  }, [visibleLine, start]);

  return (
    <div
      className="flex flex-col items-center justify-center w-full -mt-10 item-center h-[100vh]"
  
    >
      {revealed.includes(0) && (
        <AnimatedLine
          text={lines[0].text}
          className={lines[0].className}
          animate={revealed.includes(0) && start}
          style={lines[0].style}
        />
      )}
      {revealed.includes(1) && (
        <AnimatedLine
          text={lines[1].text}
          className={lines[1].className}
          animate={revealed.includes(1) && start}
          style={lines[1].style}
        />
      )}
      {revealed.includes(2) && (
        <AnimatedLine
          text={lines[2].text}
          className={lines[2].className}
          animate={revealed.includes(2) && start}
          style={lines[2].style}
            />
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={buttonVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ width: "100%" }}
      >
        {buttonVisible && (
          <button className="mt-7 px-8 py-3 bg-blue-800 text-white tracking-widest uppercase font-medium rounded-sm shadow text-sm">
            {buttonText}
          </button>
        )}
      </motion.div>
    </div>
  );
}

// AnimatedLine component
function AnimatedLine({ text, className, animate,style }) {
  const [displayed, setDisplayed] = React.useState('');

  React.useEffect(() => {
    if (!animate) {
      setDisplayed('');
      return;
    }
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      if (typeof text === 'string' && i < text.length) {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [animate, text]);

  return <div className={className} style={style}>{displayed}</div>;
}
