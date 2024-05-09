import { useState, useEffect } from "react";

function useViewportWidth() {
  const [vw, setVw] = useState(window.innerWidth * 0.01);

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth * 0.01);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return vw;
}

export default useViewportWidth;
