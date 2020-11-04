import React from 'react';

class DivCompoent extends React.Component{
  constructor(props){
    super()
    console.log(props)
  }
  state = {
    count: 0
  }
  add(){
    let num = this.state.count;
    this.setState({
      count: num + 1
    })
  }
  render(){
    return (
        <div>
          <h2>这是classComponent </h2>
          <p>{this.props.name}-{this.props.age}</p>
          <p>count: {this.state.count}</p>
          <button onClick={()=>this.add()}>增加</button>
        </div>
    );
  }
}

export default DivCompoent;