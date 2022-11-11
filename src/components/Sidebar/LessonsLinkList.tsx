import { lessonsLinks } from "../../hooks/useLinks";

export const LessonsLinkList = () => {
  return (
    <ul className="lessons-links">
      {lessonsLinks.map((item,idx) => (
        <li key={idx}>{item.title}</li>
      ))}
    </ul>
  );
};
