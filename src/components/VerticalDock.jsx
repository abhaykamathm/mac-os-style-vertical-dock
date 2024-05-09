import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import useViewportWidth from "../hooks/useViewportWidth";

function VerticalDock({ icons }) {
  const mouseY = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className="flex flex-col justify-end items-start gap-[1.4vw] absolute left-[1.875vw]"
    >
      {icons.map((icon, index) => (
        <AppIcon mouseY={mouseY} key={index} icon={icon} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseY, icon }) {
  const ref = useRef(null);
  const vw = useViewportWidth();

  let distance = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  let heightSync = useTransform(
    distance,
    [-150, 0, 150],
    [2.5 * vw, 3.75 * vw, 2.5 * vw]
  );
  let height = useSpring(heightSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ height: height }}
      className="h-10 aspect-square flex justify-center items-center rounded-[0.8vw] bg-[rgba(255,255,255,0.20)] hover:cursor-pointer hover:bg-slate-50 nav-icon"
      onClick={() => {
        console.log(icon.path);
      }}
    >
      <img src={icon.passive} className={"w-[50%] nav-icon-passive"} />
      <img src={icon.active} className={"w-[50%] nav-icon-active"} />
    </motion.div>
  );
}

export default VerticalDock;
