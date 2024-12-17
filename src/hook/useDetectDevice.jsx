import { useEffect, useState } from "react";

const breakpoints = {
  xs: "576",
  sm: "786",
  md: "992",
  lg: "1200"
};

const deviceHander = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth <= parseInt(breakpoints.xs)) {
    return "MOBILE";
  } else if (windowWidth <= parseInt(breakpoints.sm)) {
    return "TABLET";
  } else if (windowWidth <= parseInt(breakpoints.md)) {
    return "LAPTOP";
  } else if (windowWidth <= parseInt(breakpoints.lg)) {
    return "DESKTOP";
  } else {
    return "LARGE SCREEN";
  }
};

function useDetectDevice() {
  const [device, setDevice] = useState(deviceHander());  

  useEffect(() => {
    const handleResize = () => {
      setDevice(deviceHander()); 
    };

    window.addEventListener("resize", handleResize);  

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device; 
}

export default useDetectDevice 


