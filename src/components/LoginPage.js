import React, { Component } from 'react'
import './LoginPage.css'

class LoginPage extends Component {
    render() {
        return (
            <div className="LoginPage">
                <main class="LoginPage__Main">
                    <h1>Login</h1>
                    <form>
                        <label>
                            <input type="text" />
                            <br/>
                            username
                            <br/>
                        </label>
                        <br/>
                        <label>
                            <input type="text" />
                            <br/>
                            password
                            <br/>
                        </label>
                        <br/>
                        <button>submit</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default LoginPage