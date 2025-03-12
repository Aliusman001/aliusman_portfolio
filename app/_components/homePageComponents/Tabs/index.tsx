"use client";
import { useRef, useState } from "react";
import TabBtn from "./TabBtn";
import TabContent from "./TabContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Tabs() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<string>("Landing Pages");

  useGSAP(
    () => {
      if (scopeRef.current) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top 90%",
          },
        });
        timeline.from(".tabs", {
          opacity: 0,
          y: 30,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        });
        timeline.from(".tabContent", {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [] }
  );

  return (
    <div className="max-w-[62.5rem] mx-auto my-20">
      <div
        ref={scopeRef}
        className="flex flex-wrap  sm:mx-auto mx-5 max-w-[800px]  lg:justify-between justify-center gap-3 mb-8"
      >
        <TabBtn
          className="tabs"
          title="Landing Pages"
          tab={tab}
          setTab={setTab}
        />
        <TabBtn
          className="tabs"
          title="Product Design"
          tab={tab}
          setTab={setTab}
        />
        <TabBtn className="tabs" title="Animation" tab={tab} setTab={setTab} />
        <TabBtn
          className="tabs"
          title="Tailwind CSS"
          tab={tab}
          setTab={setTab}
        />
      </div>
      <div className="tabContent">
        {tab === "Landing Pages" && (
          <TabContent
            title="Drive Conversions with Landing Page"
            content="A well-designed landing page is the key to turning visitors into customers. By focusing on a single call to action, your landing page helps guide your audience toward taking the next step in their journey. Discover how to create an engaging, result-driven landing page that drives your business forward."
            link="/"
          />
        )}
        {tab === "Product Design" && (
          <TabContent
            title="Transform Product Design Impact"
            content="A well-crafted product design is essential for capturing attention and driving user engagement. By focusing on intuitive interfaces and seamless experiences, you can create designs that not only look great but also convert visitors into loyal customers."
            link="/"
          />
        )}
        {tab === "Tailwind CSS" && (
          <TabContent
            title="Without Tailwind, Life is Colorless"
            content="Tailwind CSS transforms your development experience, adding vibrant, efficient styling to every project. With its utility-first approach, it makes building beautiful, responsive designs effortless. Life without Tailwind feels limited — with it, the possibilities are endless."
            link="/"
          />
        )}
        {tab === "Animation" && (
          <TabContent
            title="Unleash the Power of Animation Design"
            content="Animation brings your design to life, enhancing user experience and engagement. By incorporating smooth, interactive animations, you can guide users through your content in a way that's both visually appealing and functional. "
            link="/"
          />
        )}
      </div>
    </div>
  );
}

export default Tabs;
