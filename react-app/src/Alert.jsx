import "./Alert.css";
import clsx from "clsx";

const Alert = ({ variant = "info", isOutlined = false, children }) => {
  const valoareStil = clsx("alert", variant, isOutlined && "is-outlined");

  // className = "alert success is-outlined"
  return <p className={valoareStil}>{children}</p>;
};

export default Alert;
