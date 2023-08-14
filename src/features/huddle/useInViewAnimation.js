import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

const useInViewAnimation = (amount) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: amount, once: false });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return { animation, ref };
};

export default useInViewAnimation;
