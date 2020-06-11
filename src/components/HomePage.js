import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import STORE from '../STORE'
import './HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <main className="HomePage__Main">
                    <section className="HomePage__HomeDisplay">
                        <div className="HomePage__HomeDisplay__Nav">
                            <ul>
                                <li>
                                    <Link to='/home/all'>
                                        All Recipes
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/home/favorites'>
                                        Favorites
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/home/my-recipes'>
                                        My Recipes
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="HomePage__HomeDisplay__FlexBox">
                            <div className="HomePage__HomeDisplay__FlexBox__Item">
                                <Link to="/recipe">
                                    <img 
                                        src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg" 
                                        alt="delicious green smoothie surrounded by fruit and kale"
                                    />
                                    <div className="Item__Controls">
                                        <h3>Green Machine</h3>
                                        <button>favorite</button>
                                        <button>customize</button>
                                        <button>review</button>
                                    </div>
                                </Link>
                            </div>
                        </div> 
                    </section>
                    <section className="HomePage__BottomButtons">
                        <div className="HomePage__BottomButtons__FlexBox">
                            <div className="BottomButton__More">
                                <button>more recipes</button>
                            </div>
                            <div className="BottomButton__Create">
                                <button>create a smoothie</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default HomePage