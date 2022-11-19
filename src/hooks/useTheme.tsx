import { useEffect } from "react";

const useTheme = () => {
  const switchTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("mode", document.documentElement.classList as any);
  };

  useEffect(() => {
    if (localStorage.getItem("mode")?.includes("dark")) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return switchTheme;
};

export default useTheme;
