import React from 'react';
import { HashRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Index from './pages/index/index.jsx'
import Movie from './pages/movie/index.jsx'
import About from './pages/about/index.jsx'
import styles from './static/css/app.scss'

const { Header, Content, Footer } = Layout;
export default class App extends React.Component{
  constructor(){
    super()
  }
  
  render(){
    return (
      <Router>
        <Layout className={styles.layout}>
          <Header >
            <div className={styles.logo}>
              <h3>ant design</h3>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={window.location.hash.split('/')[1]} style={{lineHeight: 'inherit'}}>
              <Menu.Item key="index"><Link to="/index" >首页</Link></Menu.Item>
              <Menu.Item key="movie"><Link to="/movie/in_theaters/1" >电影</Link></Menu.Item>
              <Menu.Item key="about"><Link to="/about" >关于</Link></Menu.Item>
            </Menu>
          </Header>
          <Content className={styles.content}>
            {/* <Route path="/" >
              <Redirect to="/index"/>
            </Route> */}
            <Route path="/index" component={Index} />
            <Route path="/movie" component={Movie} />
            <Route path="/about" component={About} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    )
  }
}