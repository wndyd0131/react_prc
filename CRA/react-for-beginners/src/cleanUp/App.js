import { useState, useEffect } from "react"; //useEffect(func, deps): 처음만 실행할 코드, dependencies: 감시당할 state
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App;
