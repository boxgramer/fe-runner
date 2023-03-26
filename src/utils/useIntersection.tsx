import { useState, useEffect } from "react";

const useIntersection = (element: any) => {
  const [isIntersect, setIntersect] = useState(false);

  const anim = element.current?.dataset.animation;
  const classList = element.current?.classList;
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersect(entry.isIntersecting);
    });

    element.current && observer.observe(element.current);
  }, []);
  if (isIntersect) {
    if (!classList?.contains(anim)) {
      element.current.classList.add(anim);
    }
  } else {
    if (classList?.contains(anim)) {
      classList.remove(anim);
    }
  }
  return isIntersect;
};

export default useIntersection;