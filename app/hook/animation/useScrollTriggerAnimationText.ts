import SplitType from "split-type";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { RefObject, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);

function useScrollTriggerAnimationText(
    paraRef?: RefObject<HTMLParagraphElement> | null,
    headingRef?: RefObject<HTMLHeadingElement> | null,
    scopeRef?: RefObject<HTMLElement> | null,
    otherRef?: RefObject<HTMLElement> | null,
) {
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
        setWidth(window.innerWidth);

        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useGSAP(
        () => {
            if (paraRef?.current || headingRef?.current || scopeRef?.current || otherRef?.current) {
                const text = paraRef?.current && new SplitType(paraRef.current, { types: "lines" });

                // Set up GSAP animation with ScrollTrigger
                gsap.from([headingRef?.current, otherRef?.current, text?.lines], {
                    opacity: 0,
                    y: 30,
                    stagger: 0.2,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scopeRef?.current,
                        start: "top 90%",
                    },
                });
            }

        },

        { dependencies: [width], scope: scopeRef?.current ? scopeRef?.current : undefined, revertOnUpdate: true }
    );
}

export default useScrollTriggerAnimationText;
