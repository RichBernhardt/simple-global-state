import Link from "next/link";
import Component from "../components-primitive/Component";
import CounterA from "../components-primitive/CounterA";
import CounterB from "../components-primitive/CounterB";
import StateXA from "../components-primitive/StateXA";
import StateXB from "../components-primitive/StateXB";
import StateYA from "../components-primitive/StateYA";
import StateYB from "../components-primitive/StateYB";

export default function Primitives() {
  return (
    <main className="primitives">
      <div>
        <a href="/functions">go to functions</a>
      </div>

      <div>
        Notice that each state employs useGlobalState individualy (XA,XB,YA,YB
        are all unique). They all have there own private useState hook. This
        means that each global state can have multiple hooks assigned to
        (reRenderFns = []). Only the setState part of the hook is used, and it
        is used for triggering re-renders. The value of the hook is never used,
        only its re-render side effect. The array of re-render functions keeps
        in sync each &quot;subscriber&quot;.
      </div>

      <Component id="A">
        <StateXA>
          <CounterA />
          <CounterB />
        </StateXA>

        <StateYA>
          <CounterA />
          <CounterB />
        </StateYA>
      </Component>

      <Component id="B">
        <StateYB>
          <CounterA />
          <CounterB />
        </StateYB>

        <StateXB>
          <CounterA />
          <CounterB />
        </StateXB>
      </Component>
    </main>
  );
}
