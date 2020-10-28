import React from 'react';

function Hello(props){
  return (
    <div>
      <h2>Hello World</h2>
      <p>{props.name} - {props.age}</p>
    </div>
  )
}
export default Hello;