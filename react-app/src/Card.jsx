import styles from "./Card.module.css";

function Card({ variant }) {
  console.dir(styles);

  return <div className={styles[variant]}>Text cu rosu</div>;
}

export default Card;
