import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import './Signup.css';

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            mobile: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
    }

    handleChange = key => e => {
        this.setState({ [key]: e.target.value })
    }

    handleSignup(){
        const options = {
            method: 'POST',
            data: this.state,
            withCredentials: true
        }
        axios('http://localhost:4000/signup', options)
        .then(res => {
            alert('회원가입 성공!!\n로그인 해주세요')
            this.props.history.push('/')
        })
        .catch(err => {
            alert('존재하는 이메일 입니다\n로그인 해주세요')
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="Signup">
                <center>
                    <h1>Sign Up</h1>
                    <div className="Signup-input-one">
                        <input
                            type='email'
                            placeholder='이메일을 입력해 주세요'
                            onChange={this.handleChange('email')}
                            ></input>
                    </div>
                    <div className='Signup-input-one'>
                        <input
                            type='password'
                            placeholder='비밀번호를 입력해 주세요'
                            onChange={this.handleChange('password')}
                            ></input>
                    </div>
                    <span className='Signup-input-two'>
                        <input
                            type='username'
                            placeholder='이름'
                            onChange={this.handleChange('username')}
                            ></input>
                    </span>
                    <span className='Signup-input-two'>
                        <input
                            type='mobile'
                            placeholder='전화번호'
                            onChange={this.handleChange('mobile')}
                        ></input>
                    </span><br></br>
                    <button className='Signup-button' onClick={() => this.props.history.push('/login')}>로그인 페이지 이동</button>
                    <button className='Signup-button' onClick={() => this.handleSignup()}>회원가입</button>
                </center>
            </div>
        )
    }
}

export default withRouter(Signup)