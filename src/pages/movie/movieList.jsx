import React from 'react';
import { Spin, Pagination } from 'antd';

export default class Index extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      page: parseInt(props.match.params.page) || 1,
      total: 0,
      pageSize: 10,
      isLoading: true
    }
  }

  componentWillMount(){
    this.getMovieListByTypeAndPage();
    
  }

  getMovieListByTypeAndPage(){
    const { type, page } = this.props.match.params;
    fetch('https://douban.uieee.com/v2/movie/in_theaters').then( () => {
      return Promise.json()
    }).then(res=>{
      console.log(res)
    })
  }

  render(){
    const { type, page } = this.props.match.params;
    return (
      <div>
        {this.state.isLoading && <Spin tip="正在加载..."/>}
        <h2>{type} - {page}</h2>
        <Pagination defaultCurrent={this.state.page} total={this.state.total} />
      </div>
    )
  }
}