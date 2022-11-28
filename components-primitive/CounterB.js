import useGlobalState, { counterB } from "../utils/globalState";

export default function CounterB() {
  const [counter, setCounter] = useGlobalState(counterB);

  return (
    <button
      className="counter"
      onClick={(e) => {
        e.stopPropagation();
        setCounter(counter + 1);
      }}
    >
      CounterB: {counter}
    </button>
  );
}
