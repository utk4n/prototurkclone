import { mainLinks } from "../../hooks/useLinks";
import {Link} from 'react-router-dom'
export const MainLinks = () => {
  return (
    <ul>
      {mainLinks.map((item, idx) => (
        <Link to={`/${item.url_link}`} key={idx}>{item.title}</Link>
      ))}
    </ul>
  );
};
