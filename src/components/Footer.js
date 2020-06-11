import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <nav className='Footer'>
                <div className='Footer__Menu'>
                    <span>
                        © Smoothie.io 2020. All rights reserved.
                    </span>
                </div>
            </nav>
        )
    }
}

export default Footer