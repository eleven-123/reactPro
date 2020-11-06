import React from 'react'
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
import { DatePicker } from 'antd';

import { HashRouter as Router, Switch, Route, Link} from 'react-router-dom'

export default class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <Router>
        <Link to="/comment">Link A</Link>
        <Link to="/count">Link B</Link>
        <DatePicker />

        {/* 匹配规则 */}
        <Route path="/comment" component={Comment} />
        {/* <Route path="/comment">
          <Comment />
        </Route> */}
        <Route path="/count">
          <Counter />
        </Route>
      </Router>
    )
  }
}