import { useState, useEffect } from "react"; //useEffect(func, deps): 처음만 실행할 코드, dependencies: 감시당할 state
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  }
  useEffect(iRunOnlyOnce, []); //한 번만 실행됨
  //console.log("SEARCH FOR", keyword); //문제점: keyword가 변할 때마다 이 코드가 실행되지만, i run all the time도 함께 계속 실행됨 
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
    console.log("I run when 'keyword' changes", keyword);
  }, [keyword]); //[keyword] 때문에 keyword가 변할 때만 함수 실행, 즉 []도 마찬가지인데 감시당하는 state가 없어서 한 번만 실행되는 거임
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter])
  return (
    <div>
      <input value={keyword} type="text" onChange={onChange} placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
