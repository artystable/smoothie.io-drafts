import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                    Smoothie.io
                    </Link>
                </h1>
                <div className='Header__Menu'>
                    <span>
                        <Link to='/login'>
                            login
                        </Link>
                    </span>
                    <span>
                        <Link to='/register'>
                            register
                        </Link>
                    </span>
                </div>
            </nav>
        )
    }
}

export default Header