import React from 'react';
import {Layout, Menu, Icon } from "antd";
import styles from './index.scss';

import { Link, Route} from 'react-router-dom';
import MovieList from './movieList.jsx';

const { Sider, Content } = Layout;

export default class About extends React.Component{
  render(){
    
    return (
      <Layout className={styles.siteLayout} >
        <Sider theme="light" width={200}>
          <Menu defaultSelectedKeys={['1']} mode="inline" className={styles.menu}>
            <Menu.Item key="1" >
              <Link to="/movie/in_theaters/1"><Icon type="setting" />正在热映</Link>
            </Menu.Item>
            <Menu.Item key="2" >
              <Link to="/movie/coming_soon/1"><Icon type="setting" />即将上映</Link>
            </Menu.Item>
            <Menu.Item key="3" >
              <Link to="/movie/top250/1"><Icon type="setting" />TOP 250</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Route path="/movie/:type/:page" component={MovieList}></Route>
        </Content>
      </Layout>
    )
  }
}