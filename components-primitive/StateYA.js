import styles from "../styles/primitives.module.css";
import useGlobalState, { stateY } from "../utils/globalState";

export default function StateYA({ children }) {
  const [state, setState] = useGlobalState(stateY);

  return (
    <fieldset
      className={styles.state}
      onClick={() => {
        setState(Math.round(Math.random() * 360));
        setTimeout(() => setState(false), 200);
      }}
      style={{
        backgroundColor: state ? `hsl(${state}, 100%, 50%)` : "transparent",
      }}
    >
      <legend>StateYA:</legend>
      {children}
    </fieldset>
  );
}
