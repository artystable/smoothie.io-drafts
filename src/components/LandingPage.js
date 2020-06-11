import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <main className="LandingPage__Main">
                    <header className="LandingPage__Hero">
                        <h1>Create the perfect smoothie.</h1>
                        <h2>Smoothie.io gives you amazing smoothie recipes that you can completely customize. You can also build your own from scratch and share them with the world!</h2>
                    </header>
                    <section className="LandingPage__HowItWorks">
                        <h3>How it works</h3>
                        <div className="LandingPage__HowItWorks__Box">
                            <img 
                                src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg" 
                                alt="delicious green smoothie surrounded by fruit and kale"/>
                            <ul>
                                <li>Browse through the list of recipes submitted by our users</li>
                                <li>Choose to "favorite" it, review it, or customize it</li>
                                <li>You can also create a recipe from scratch</li>
                                <li>Once your done you can publish it so others can enjoy it</li>
                            </ul>
                        </div> 
                    </section>
                    <section className="LandingPage__GetStarted">
                        <h3>Get started</h3>
                        <div className="LandingPage__GetStarted__Box">
                            <h4>
                                <Link to='/register'>
                                    Register
                                </Link>
                            </h4>
                            <h4>
                                <Link to='/login'>
                                    Login
                                </Link>
                            </h4>
                            <h4>
                                <Link to='/home'>
                                    Go to the app
                                </Link>
                            </h4>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default LandingPage