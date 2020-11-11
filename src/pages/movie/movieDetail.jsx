import React from 'react';
import { Button, Icon } from 'antd'

export default class MovieDetail extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {}
  }

  goBack = () => {
    this.props.history.go(-1)
  }

  render(){
    return (
      <div>
        <h4>MovieDetail -- {this.props.match.params.id}</h4>
        <Button type="primary" onClick={this.goBack}><Icon type="left" />返回上一页</Button>
      </div>
    )
  }
}