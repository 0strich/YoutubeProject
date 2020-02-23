import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Mypage extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        const { isLogin, userinfo} = this.props

        return (
            isLogin ? (
                <div>
                    <center>
                        <h1>My Page</h1>
                        <h1>Hello, Welcome!! {userinfo.username}!!</h1>
                        <h3>Information</h3>
                        <div className="username">UserName : {userinfo.username}</div>
                        <div className="email">Email : {userinfo.email}</div>
                        <div className="mobile">Mobile : {userinfo.mobile}</div>
                    </center>
                </div>
            ):(
                <div>
                    <center>
                        <h3>NOT FOUND</h3>
                        <h1>Go Away!!!!</h1>
                    </center>
                </div>
            )
        )
    }
}

export default withRouter(Mypage)