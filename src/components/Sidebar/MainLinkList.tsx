import { mainLinks } from "../../hooks/useLinks";

export const MainLinks = () => {
  return (
    <ul>
      {mainLinks.map((item, idx) => (
        <li key={idx}>{item.title}</li>
      ))}
    </ul>
  );
};
