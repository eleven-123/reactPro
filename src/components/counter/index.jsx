import React from 'react';
import '../comment/style.scss';
import { number } from 'prop-types';


export default class Counter extends React.Component{
  static defaultProps = {
    initCount: 0
  };
  // 属性类型校验(prop-types)
  static propTypes = {
    initCount: number
  }

  constructor(props){
    super(props)

    this.state = {
      count: props.initCount
    }
  }
  componentWillMount(){
    console.log('componentWillMount')
  }
  render(){
    return <div>
      <h6>Counter-计数器</h6>
      <div id="mybox" className="box">
        <input type="text" name="count" />
        <button onClick={this.onChange}>Add</button>
        <p>当前的数量是：{this.state.count}</p>
      </div>
    </div>
  }
  
  componentDidMount(){
    console.log('componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  onChange = () =>{
    let num = this.state.count + 1;
    this.setState({
      count: num
    })
  }
}