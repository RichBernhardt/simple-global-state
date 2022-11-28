import styles from "../styles/primitives.module.css";

export default function Component({ id, children }) {
  return (
    <fieldset className={styles.component}>
      <legend>{`Component${id}`}:</legend>
      {children}
    </fieldset>
  );
}
