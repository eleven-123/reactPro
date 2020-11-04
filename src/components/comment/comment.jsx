import React from 'react';
import CommentItem from './commentItem.jsx'
import './style.scss'

export default class Comment extends React.Component{
  constructor(){
    super();
    this.state={
      list: [
        {id: 1, user:'张三',content:'hahahh, 沙发'},
        {id: 2, user:'李四',content:'hahahh, 千年老二'},
        {id: 3, user:'王五',content:'hahahh, 老三'},
        {id: 4, user:'赵六',content:'hahahh, 老四'}  
      ]
    }
  }
  render(){
    const { list } = this.state;
    return <div className="box">
      
      <h6 style={{margin:'4px 0'}}>List</h6>
      {
        list.map((item, index) =>{
          return <CommentItem {...item} key={index}></CommentItem>
        })
      }
    </div>
  }
}