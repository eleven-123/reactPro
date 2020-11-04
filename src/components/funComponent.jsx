import React,{useState} from 'react';

function Hello(props){
  const [count, setCount] = useState(0)
  const add = () => {
    let num = count + 1;
    setCount(num)
  }
  return (
    <div>
      <h2>Hello World</h2>
      <p>{props.name} - {props.age}</p>
      <p>count: {count}</p>
      <button onClick={add}>增加</button>
    </div>
  )
}
export default Hello;