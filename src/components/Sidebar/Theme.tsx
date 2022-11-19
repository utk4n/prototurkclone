import { ThemeIcon } from "../../assets/ThemeIcon";
import useTheme from "../../hooks/useTheme";
export const Theme = () => {
  const theme = useTheme()

  return (
      <button onClick={theme} className="theme-switcher">
        <ThemeIcon /> <span>Koyu Mod</span>
      </button>
  );
};
