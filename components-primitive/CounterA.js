import useGlobalState, { counterA } from "../utils/globalState";

export default function CounterA() {
  const [counter, setCounter] = useGlobalState(counterA);

  return (
    <button
      className="counter"
      onClick={(e) => {
        e.stopPropagation();
        setCounter(counter + 1);
      }}
    >
      CounterA: {counter}
    </button>
  );
}
