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
      count: props.initCount,
      step: 1
    }
  }
  componentWillMount(){
    console.log('componentWillMount')
  }
  render(){
    return <div>
      <h6>Counter-计数器</h6>
      <div id="mybox" className="box">
        <input type="text" name="count" value={this.state.step} onChange={this.chageStep} ref="step"/>
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
    let num = Number(this.state.count) + Number(this.state.step);
    this.setState({
      count: num
    })
  }
  chageStep = (e) => {
    /* 方式1 ref */
    // let val = this.refs.step.value;

    /* 方式2 */
    let val = e.target.value;

    this.setState({
      step: val
    })
  }
}