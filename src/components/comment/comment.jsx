import React from 'react';
import CommentItem from './commentItem.jsx'
import CommentForm from './commentForm.jsx'
import './style.scss'
import PropsType from 'prop-types'

export default class Comment extends React.Component{
  constructor(){
    super();
    this.state={
      list: [
        {id: 1, user:'张三',content:'hahahh, 沙发'},
        {id: 2, user:'李四',content:'hahahh, 千年老二'},
        {id: 3, user:'王五',content:'hahahh, 老三'},
        {id: 4, user:'赵六',content:'hahahh, 老四'}  
      ],
      color: 'red'
    }
  }
  render(){
    const { list } = this.state;
    return <div className="box">
      <h6>添加评论</h6>
      <CommentForm add={this.addItem}/>
      <h6 style={{margin:'4px 0'}}>List</h6>
      {
        list.map((item, index) =>{
          return <CommentItem {...item} key={index}></CommentItem>
        })
      }
    </div>
  }

  addItem = (values) =>{
    console.log(values)
    const list = [...this.state.list];
    list.unshift(values)
    this.setState({
      list
    })
  }

  // context特性 => 多层组件情况下，可以在父组件使用content特性，这样子/孙组件不需要逐个组件传递属性，如下  
  getChildContext(){
    return {
      color: this.state.color
    }
  }
  static childContextTypes  = { //类型校验
    color: PropsType.string
  }
}