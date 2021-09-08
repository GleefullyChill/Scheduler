import {useState} from "react";

const useVisualMode = function (initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  function transition(newMode, replace = false) {

    if (!replace) {
      setHistory(prev => {
        return [...prev, newMode]
      })
    } else {
      setHistory(prev => {
        return [...prev.slice(0, prev.length - 1), newMode];
      })
    }
    setMode(prev => {
      return newMode
    });
  }
  
  const back = function() {
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory(prev => {
        return [...prev].slice(0, history.length -1)
      })
    }
  }
  return {mode, transition, back};
}

export default useVisualMode;

