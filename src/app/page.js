

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
import Image from "next/image";
import Section2 from "@/components/Section2";
import Section11 from "@/components/Section11";

export default function Home() {
  return (
   <>
   <div className="text-center mt-10 ">
 <Section1/>
 <Section2/>
 <Section4/>
  <Section/>
  <Section3/>
  <Section11/>
  <Section5/>
  {/* <Section6/> */}
  <Section8/>
  <Section7/>
  <Section9/>
  <Section10/>
   </div>
   </>
  );
}
