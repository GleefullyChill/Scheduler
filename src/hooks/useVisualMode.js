


import {useState} from "react";

// used in Appointment/index.js
const useVisualMode = function (initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // replace is currently only used when an ERROR mode is set, to replace the pending status mode
  function transition(newMode, replace = false) {

    if (!replace) {
      setHistory(prev => {
        return [...prev, newMode];
      })
    } else {
      setHistory(prev => {
        return [...prev.slice(0, prev.length - 2), newMode];
      })
    }
    setMode(prev => {
      return newMode;
    });
  }
  
  // currently only used when closing an Error.
  const back = function() {

    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory(prev => {
        return [...prev].slice(0, history.length -1);
      })
    }
  }
  return {mode, transition, back};
}

export default useVisualMode;

