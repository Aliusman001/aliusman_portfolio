"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import LoadingBar from "react-top-loading-bar";

function CustomLoadingBar() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    // Start progress when pathname changes
    setProgress(40);

    // Simulate route load completion with a delay
    const timer = setTimeout(() => {
      setProgress(100);
    }, 500); // Adjust the delay as needed to simulate loading time

    // Cleanup timeout if the component unmounts or pathname changes before completion
    return () => clearTimeout(timer);
  }, [pathname]); // Re-run whenever the pathname changes

  return (
    <div>
      <LoadingBar
        color="#FD853A"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)} // Reset progress after completion
      />
    </div>
  );
}

export default CustomLoadingBar;
