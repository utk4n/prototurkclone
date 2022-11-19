import { IProps } from "../../types/HeaderPropTypes";

export const Header: React.FC<IProps> = ({ title, content, className }) => {
  return (
    <div className={`content-header ${className}`}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
