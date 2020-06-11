import React, { Component } from 'react'
import './CreatePage.css'

class CreatePage extends Component {

render() {
    return (
        <div className="CreatePage">
            <main className="CreatePage__Main">
                <form className="RecipeTitle">
                    <label>
                        <input 
                            type="text"
                            placeholder="My Awesome Smoothie"
                        />
                        <br/>
                        Name your smoothie!
                    </label>
                </form>
                <div className="CreatePage__Main__FlexBox">
                    <div className="Recipe__Box">
                        <div className="Recipe__Item">
                            <h3>3 cups of blueberries</h3>
                        </div>
                        <div className="Recipe__Item">
                            <h3>1 whole banana</h3>
                        </div>
                        <div className="Recipe__Item">
                            <h3>2 cups of orange juice</h3>
                        </div>
                    </div>
                    <div className="Buttons__Box">
                        <button>upload picture</button>
                        <button>save</button>
                        <button>publish</button>
                    </div>
                    <div className="Ingredients__Box">
                        <h3>Pick your ingreditents</h3>
                        <div className="Ingredients__List">
                            <div className="Ingredients__Category">
                                <div className="Ingredients__Item">
                                    <form>
                                        <label>blueberries</label>
                                        <input 
                                            type="text"
                                            placeholder="amount"
                                            size="6"
                                        />
                                        <input
                                            type="text"
                                            placeholder="units"
                                            size="4"
                                        />
                                        <button>add</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

}

export default CreatePage