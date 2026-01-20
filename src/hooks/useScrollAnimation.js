import { useEffect, useRef } from "react";

const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("show");
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return ref;
};

export default useScrollAnimation;
