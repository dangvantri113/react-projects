import "./Card.css";
import clsx from "clsx";

const Card = (props) => {
  const className = clsx("card", props.className);

  return <div className={className}>{props.children}</div>;
};
export default Card;
