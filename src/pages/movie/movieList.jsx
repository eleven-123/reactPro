import React from 'react';
import { Spin, Pagination } from 'antd';
import fetchJSONP from 'fetch-jsonp'
import MovieItem from './movieItem.jsx';
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
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }

  getMovieListByTypeAndPage(){
    const { type, page } = this.props.match.params;
    /* fetchJSONP('https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=10&page_start=1').then( (res) => {console.log(res)
      return Promise.json()
    }).then(res=>{
      console.log(res)
    }) */
    const data = {"subjects":
      [{"rate":"7.6","cover_x":2000,"title":"八佰","url":"https:\/\/movie.douban.com\/subject\/26754233\/","playable":true,"cover":"https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2615992304.jpg","id":"26754233","cover_y":2800,"is_new":false},{"rate":"7.0","cover_x":813,"title":"列夫·朗道：卡佳与塔尼娅","url":"https:\/\/movie.douban.com\/subject\/34977895\/","playable":false,"cover":"https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2603780464.jpg","id":"34977895","cover_y":1181,"is_new":true},{"rate":"6.5","cover_x":8100,"title":"恶棍之都","url":"https:\/\/movie.douban.com\/subject\/33442360\/","playable":false,"cover":"https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2623523542.jpg","id":"33442360","cover_y":12000,"is_new":true},{"rate":"7.2","cover_x":1200,"title":"碧蓝之海","url":"https:\/\/movie.douban.com\/subject\/34460303\/","playable":false,"cover":"https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2589432121.jpg","id":"34460303","cover_y":1697,"is_new":true},{"rate":"7.2","cover_x":1080,"title":"无声","url":"https:\/\/movie.douban.com\/subject\/33591810\/","playable":false,"cover":"https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2620104689.jpg","id":"33591810","cover_y":1544,"is_new":true},{"rate":"8.6","cover_x":1500,"title":"芝加哥七君子审判","url":"https:\/\/movie.douban.com\/subject\/2609258\/","playable":false,"cover":"https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2620161520.jpg","id":"2609258","cover_y":2222,"is_new":false},{"rate":"5.8","cover_x":2764,"title":"女巫","url":"https:\/\/movie.douban.com\/subject\/3346423\/","playable":false,"cover":"https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2621884130.jpg","id":"3346423","cover_y":4096,"is_new":false},{"rate":"7.6","cover_x":1462,"title":"金都","url":"https:\/\/movie.douban.com\/subject\/30159567\/","playable":false,"cover":"https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2574853860.jpg","id":"30159567","cover_y":2048,"is_new":false},{"rate":"7.3","cover_x":2025,"title":"波拉特2","url":"https:\/\/movie.douban.com\/subject\/4135439\/","playable":false,"cover":"https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2621751023.jpg","id":"4135439","cover_y":3000,"is_new":false},{"rate":"7.2","cover_x":2000,"title":"爱与怪物","url":"https:\/\/movie.douban.com\/subject\/21349338\/","playable":false,"cover":"https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2622904695.jpg","id":"21349338","cover_y":3000,"is_new":false}],total:50
    }
    this.setState({
      isLoading: false,
      movies: data.subjects,
      total: data.total
    })
    console.log(data)
  }


  render(){
    const { type, page } = this.props.match.params;
    return (
      <div>
        {this.state.isLoading && <Spin tip="正在加载..."/>}
        <div style={{display:"flex", flexWrap:"wrap",padding:'10px 0'}}>
          {this.state.movies.map(item => {
            return <MovieItem {...item} key={item.id} history={this.props.history}/>
          })}
        </div>
        <Pagination defaultCurrent={this.state.page} total={this.state.total} onChange={(page)=>{
          // 
          // window.location.href="/#/movie/"+type+"/"+page
          // 
          this.props.history.push("/movie/"+type+"/"+page)
        }}/>
      </div>
    )
  }
}