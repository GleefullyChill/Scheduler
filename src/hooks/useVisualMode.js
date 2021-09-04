import React, {useState, useEffect} from "react";

const useVisualMode = function (initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  function transition(newMode, replace = false) {

    setHistory(prev => {
      return [newMode, ...prev]
    })
    setnewMode(prev => {
      return newMode
    });
    console.log(mode)
    return (mode, history)
  }
  
  // const back = function() {
  //   setHistory(prev => {
  //     setMode([...prev][0])
  //     return [...prev.slice(1)]
  //   })
  //   console.log(history);
  // }
  return {mode, transition};
}

export default useVisualMode;



// function transition(mode, replace=false) {
//   if (!replace) {
//      setHistory(prev => {
//         return [...prev, mode]
//       })
//    } else {
//      setHistory(prev => {
//         return [...prev.slice(0, prev.length - 1), mode];
//     })
//   }
// }
// return {transition}