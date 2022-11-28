import styles from "../styles/primitives.module.css";
import useGlobalState, { counterA } from "../utils/globalState";

export default function CounterA() {
  const [counter, setCounter] = useGlobalState(counterA);

  return (
    <button
      className={styles.counter}
      onClick={(e) => {
        e.stopPropagation();
        setCounter(counter + 1);
      }}
    >
      CounterA: {counter}
    </button>
  );
}
