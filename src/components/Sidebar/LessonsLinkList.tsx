import { lessonsLinks } from "../../hooks/useLinks";
import { Link } from "react-router-dom";

export const LessonsLinkList = () => {
  return (
    <ul className="lessons-links">
      {lessonsLinks.map((item, idx) => (
        <Link to={`/category/${item.url_link}`} key={idx}>{item.title}</Link>
      ))}
    </ul>
  );
};
