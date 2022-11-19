import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <h2>
          ./prototurk <span>v2.5.2</span>
        </h2>
      </Link>
    </div>
  );
};
