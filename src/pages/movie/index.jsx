import React from 'react';
import {Layout, Menu, Icon } from "antd";
import styles from './index.scss';

import { Link, Route, Switch} from 'react-router-dom';
import MovieList from './movieList.jsx';
import MovieDetail from './movieDetail.jsx'

const { Sider, Content } = Layout;

export default class About extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props.location.pathname)
  }
  render(){
    
    return (
      <Layout className={styles.siteLayout} >
        <Sider theme="light" width={200}>
          <Menu defaultSelectedKeys={this.props.location.pathname} mode="inline" className={styles.menu}>
            <Menu.Item key="in_theaters" >
              <Link to="/movie/in_theaters/1"><Icon type="setting" />正在热映</Link>
            </Menu.Item>
            <Menu.Item key="coming_soon" >
              <Link to="/movie/coming_soon/1"><Icon type="setting" />即将上映</Link>
            </Menu.Item>
            <Menu.Item key="top250" >
              <Link to="/movie/top250/1"><Icon type="setting" />TOP 250</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
            <Route path="/movie/detail/:id" component={MovieDetail}></Route>
            <Route path="/movie/:type/:page" component={MovieList}></Route>
          </Switch>
        </Content>
      </Layout>
    )
  }
}