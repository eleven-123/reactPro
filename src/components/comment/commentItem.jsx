import React from 'react';
import styles from './style.scss'

export default function Comment(props){
  return(
    <div className={styles.box} > {props.user} - {props.content}</div>
  )
}