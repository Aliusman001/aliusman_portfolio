"use client";
import AnimatedCursor from "react-animated-cursor";

export default function CustomAnimatedCursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={80}
        color="253, 133, 58"
        trailingSpeed={8}
        innerScale={0.7}
        outerScale={0.9}
      />
    </>
  );
}
