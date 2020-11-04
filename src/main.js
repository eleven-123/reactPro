import React from 'react';
import ReactDom from 'react-dom';


/*
  var div = React.createElement('div',{name:'name'},'这是div22');
  ReactDom.render(div, document.getElementById('app'))
*/
/* 
var lis = [];
for(var i=0;i<10;i++){
  var li = <li key={i}>item-{i}</li>
  lis.push(li)
}
var div = <div name="name">
  这是div222
  <ul>
    {lis}
  </ul>
</div>
ReactDom.render(div, document.getElementById('app')) */

/* 函数组件 */
/* function Hello(props){
  return (
    <div>
      <h2>Hello World {props.name}-{props.age}</h2>
    </div>
  )
} */
import Hello from './components/funComponent.jsx';
var person = {
  name:'zs',
  age:18
}

/* 类组件 */
/* class DivCompoent extends React.Component{
  render(){
    return (
      <div>
        <h2>这是classComponent </h2>
        <p>{this.props.name}- {this.props.age}</p>
      </div>
    );
  }
} */
import DivCompoent from './components/classComponent.jsx';
import Comment from './components/comment/comment.jsx';
import Counter from './components/counter/index.jsx';

ReactDom.render(
  <div>
    <Hello {...person} />
    <DivCompoent {...person} />
    {/* 评论 */}
    <Comment />
    <Counter initCount={2} />
    <Counter />
  </div>, document.getElementById('app'))