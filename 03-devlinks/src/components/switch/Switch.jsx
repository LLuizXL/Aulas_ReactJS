import styles from "./Switch.module.css";

const Switch = ({ troca, isLight }) => {


  return (
    <div  className={isLight ? styles.light : undefined}>
      <div onClick={troca} id={styles.switch}>
        <button></button>
        <span></span>
      </div>
    </div>
  );
};

export default Switch;
