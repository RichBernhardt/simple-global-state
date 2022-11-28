import styles from "../styles/primitives.module.css";
import useGlobalState, { stateX } from "../utils/globalState";

export default function StateXA({ children }) {
  const [state, setState] = useGlobalState(stateX);

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
      <legend>StateXA:</legend>
      {children}
    </fieldset>
  );
}
