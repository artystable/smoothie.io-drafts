import React, { Component } from 'react'
import './RegisterPage.css'

class RegisterPage extends Component {
    render() {
        return (
            <div className="RegisterPage">
                <main class="RegisterPage__Main">
                    <h1>Register</h1>
                    <form>
                        <label>
                            <input type="text" />
                            <br/>
                            desired username
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

export default RegisterPage