import React, { Component } from 'react'
import './RecipePage.css'

class RecipePage extends Component {
    render() {
        return (
            <div className="RecipePage">
                <main className="RecipePage__Main">
                    <section className="RecipePage__RecipeDisplay">
                        <h1>Green Machine</h1>
                        <h3>made by greenguru</h3>
                        <div className="RecipePage__RecipeDisplay__FlexBox">
                            <img 
                                src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg" 
                                alt="delicious green smoothie surrounded by fruit and kale"
                            />
                            <div className="RecipeBox">
                                <h3>Recipe</h3>
                                <ul>
                                    <li>3 cups of blueberries</li>
                                    <li>3 handfuls of spinach</li>
                                    <li>2 stocks of celery</li>
                                    <li>2 cups orange juice</li>
                                    <li>1 cup of water</li>
                                    <li>1 banana</li>
                                    <li>1/2 cup of spirilina</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="RecipePage__BottomButtons">
                        <div className="RecipePage__BottomButtons__FlexBox">
                            <button>favorite</button>
                            <button>customize</button>
                            <button>review</button>
                        </div>
                    </section>
                    <section className="RecipePage__ReviewsBox">
                        <h3>Reviews</h3>
                        <div className="IndividualReviewBox">
                            <div className="IndividualReviewBox__User">
                                <img
                                    src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg"
                                    alt="delicious green smoothie surrounded by fruit and kale"
                                />
                                <span>greenguru</span>
                            </div>
                                <div className="IndividualReviewBox__Review">
                                    <h4>Was pretty good!</h4>
                                    <span>Very tasty and nutritious! The color was odd though.</span>
                                </div>
                            </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default RecipePage