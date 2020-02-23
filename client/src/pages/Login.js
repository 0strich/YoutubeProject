import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import './Login.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
        
    handleChange = key => e => {
        this.setState({ [key]: e.target.value })
    }

    handleSubmit = () => {
        const options = {
            method: 'POST',
            data: this.state,
            withCredentials: true
        }
        axios('http://localhost:4000/signin', options)
        .then(res => {
            return axios.get('http://localhost:4000/mypage', {withCredentials: true})
        })
        .then(res => {
            this.props.handleLogin(res.data)
            this.props.history.push('/')
        })
        .catch(err => {
            alert('존재하지 않는 사용자 입니다\n회원가입을 해주세요')
        })
    }

    render() {
        return (
            <div className="Login">
                <center>
                    <h1>Sign In</h1>
                    <div className='Login-input'>
                        <input
                            type="email"
                            placeholder="이메일을 입력해 주세요"
                            onChange={this.handleChange('email')}
                            ></input>
                    </div>
                    <div className='Login-input'>
                        <input
                            type="password"
                            placeholder="비밀번호를 입력해 주세요"
                            onChange={this.handleChange('password')}
                        ></input>
                    </div>
                    <button className='Login-button' onClick={() => this.handleSubmit()}>로그인</button>
                    <button className='Login-button' onClick={() => this.props.history.push('/signup')}>회원가입</button>
                </center>
            </div>
        )
    }
}

export default withRouter(Login)