// https://dev.to/yezyilomo/global-state-management-in-react-with-global-variables-and-hooks-state-management-doesn-t-have-to-be-so-hard-2n2c

// The singleton is a single state, NOT a store with states in it.

// If you need re-render on state change then employ useGlobalState
// If you do not want re-render on state change then use getters & setters

export const stateX = createGlobalState();
export const stateY = createGlobalState();
export const counterA = createGlobalState(100);
export const counterB = createGlobalState(200);

export const carouselData = createGlobalState({
  slides: ["First", "Second", "Third"],
});

// ##################################

function createGlobalState(initState = null) {
  const prototype = {
    data: { state: initState, reRenderFns: [] },

    get() {
      return this.data.state;
    },

    set(newState) {
      if (newState === this.data.state) return;
      this.data.state = newState;
      this.data.reRenderFns.forEach((reRender) => reRender());
      // https://github.com/ryanmcdermott/clean-code-javascript#use-method-chaining
      return this;
    },

    joinReRender(reRender) {
      if (this.data.reRenderFns.includes(reRender)) return;
      this.data.reRenderFns.push(reRender);
    },

    cancelReRender(reRender) {
      this.data.reRenderFns = this.data.reRenderFns.filter(
        (reRenderFn) => reRenderFn !== reRender
      );
    },
  };

  return Object.freeze(Object.create(prototype));
}

// ##################################
import { useState, useEffect } from "react";

export default function useGlobalState(globalState) {
  const [, set] = useState(globalState.get());
  const state = globalState.get();
  const reRender = () => set({});

  useEffect(() => {
    globalState.joinReRender(reRender);
    return () => {
      globalState.cancelReRender(reRender);
    };
  });

  function setState(newState) {
    globalState.set(newState);
  }

  return [state, setState];
}
