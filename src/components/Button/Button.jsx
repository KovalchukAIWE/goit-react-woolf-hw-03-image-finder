import styles from './Button.module.css';

const Button = ({ onClick, text }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button onClick={onClick} className={styles.button}>
        {text}
      </button>
    </div>
  );
};

export default Button;
