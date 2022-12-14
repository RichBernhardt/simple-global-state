import Link from "next/link";
import Showcase from "../components-functions/Showcase";
import { carouselData } from "../utils/globalState";

export default function Functions() {
  return (
    <main>
      <div className="d-flex gap-5 p-3">
        <a href="/primitives">Go to primitives</a>

        <button onClick={() => carouselData.get().slideto(2)}>
          Go to the second slide
        </button>
      </div>

      <Showcase />
    </main>
  );
}
