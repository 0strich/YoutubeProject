import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Mypage from './pages/Mypage'

import './App.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin: false,
      userinfo: {}
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(info){
    this.setState({
      isLogin: true,
      userinfo: info
    })
  }

  render() {
    const { isLogin, userinfo } = this.state

    return (
      <div>
        <Switch>
          <Route path='/login' render={() => <Login handleLogin={this.handleLogin} />} />
          <Route exac path='/signup' render={() => <Signup />} />
          <Route exac path='/mypage' render={() => isLogin ? <Mypage isLogin={isLogin} userinfo={userinfo} /> : <Redirect to='/login' />} />
          <Route path='/' render={() => isLogin ? <Redirect to='/mypage' /> : <Redirect to='login' />} />
        </Switch>
      </div>
    )
  }
}
