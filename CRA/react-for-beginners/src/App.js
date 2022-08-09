import { useState, useEffect } from "react"; //useEffect(func, deps): 처음만 실행할 코드, dependencies: 감시당할 state
import Button from "./Button";
import styles from "./App.module.css";

// function Hello(){
//   function byFn() {
//     console.log("bye :(");
//   }
//   function hiFn(){
//     console.log("hi :)");
//     return byFn(); //언마운트될 때 실행
//   }
//   useEffect(hiFn, []); //마운트될 때 실행
//   return <h1>Hello</h1>;
// }

//위랑 동일
function Hello(){
  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("bye :(");
    }
  }, []); //마운트될 때 실행
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App;
