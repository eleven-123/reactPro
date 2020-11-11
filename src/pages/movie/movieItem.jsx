import React from 'react'
import styles from './index.scss'

const MovieItem = (props) =>{
  const toDetail = (id) => {
    props.history.push("/movie/detail/"+id)
  }
  return (
    <div className={styles.item} onClick={() => {toDetail(props.id)}}>
      <img src={props.cover} alt="img"/>
      <h4>{props.title}</h4>
    </div>
  )
}
export default MovieItem;

/* export default class MovieItem extends React.Component{
  constructor(props){
    super(props)
  }
  toDetail = () => {
    console.log(this.props)
    // props.history.push("/movie/detail/"+props.item)
  }
  render(){
    return (
      <div className={styles.item} onClick={this.toDetail}>
        <img src={this.props.cover} alt="img"/>
        <h4>{this.props.title}</h4>
      </div>
    )
  }
} */