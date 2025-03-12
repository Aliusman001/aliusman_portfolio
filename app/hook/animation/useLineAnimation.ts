import SplitType from "split-type";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { RefObject, useEffect, useState } from "react";

gsap.registerPlugin(useGSAP);

function debounce<T extends (...args: unknown[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}


function useLineAnimation(
    paraRef: RefObject<HTMLParagraphElement>,
    headingRef: RefObject<HTMLHeadingElement>,
    scopeRef: RefObject<HTMLElement>
) {
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
        setWidth(window.innerWidth);

        // Debounced resize handler
        const handleResize = debounce(() => setWidth(window.innerWidth), 300);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useGSAP(
        () => {
            if (paraRef.current && headingRef.current) {
                const text = new SplitType(paraRef.current, { types: "lines" });

                // Animate the lines
                gsap.from([headingRef.current, text.lines], {
                    opacity: 0,
                    y: 30,
                    stagger: 0.2,
                    duration: 0.7,
                    ease: "power2.out",
                });
            }
        },
        { dependencies: [width], scope: scopeRef?.current ? scopeRef?.current : undefined, revertOnUpdate: true }
    );
}

export default useLineAnimation;
