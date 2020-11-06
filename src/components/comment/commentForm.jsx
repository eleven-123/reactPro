import React from 'react';
import PropsType from 'prop-types'

export default class CommentForm extends React.Component{
  static contextTypes = {
    color: PropsType.string
  }

  constructor(props){
    super(props);
    this.state = {
      user:'',
      content: ''
    }
  }

  render(){
    return <div>
      {/* <form> */}
        <div style={{color: this.context.color}}>评论人：<input type="text" value={this.state.user} onChange={this.changeUser} /></div>
        <div>评论内容：<input type="content" value={this.state.content} onChange={this.changeInput} /></div>
        <button onClick={this.add}>添加</button>
      {/* </form> */}
    </div>
  }

  changeUser = (e) => {
    let val = e.target.value;
    this.setState({user: val})
  }

  changeInput = (e) => {
    let val = e.target.value;
    this.setState({content: val})
  }

  add = () => {
    const { user, content } = this.state;
    this.props.add({user, content})
  }
}