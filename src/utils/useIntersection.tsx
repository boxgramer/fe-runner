import React, { useState, useEffect } from "react";

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

const useIntersections = (
  elements: React.RefObject<HTMLElement>[],
  rootMargin = "100px 0px 100px 0px"
) => {
  useEffect(() => {
    const callBackObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const anim = entry.target.getAttribute("data-animation");
        if (anim) {
          const classList = entry.target.classList;
          if (entry.isIntersecting) {
            if (!classList.contains(anim)) {
              classList.add(anim);
            }
          } else {
            if (classList.contains(anim)) {
              classList.remove(anim);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(callBackObserver, { rootMargin });
    elements.forEach((el) => {
      if (el.current) {
        observer.observe(el.current);
      }
    });
    return () => {
      observer.disconnect();
    };
  });
};

export { useIntersection, useIntersections };
