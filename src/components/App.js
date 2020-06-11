import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import LandingPage from './LandingPage'
import HomePage from './HomePage'
import RecipePage from './RecipePage'
import CreatePage from './CreatePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import NotFoundPage from './NotFoundPage'
import Footer from './Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App__Header'>
          <Header />
        </header>
        <main className='App__Main'>
        <Switch>
          <Route
            exact
            path={'/'}
            component={LandingPage}
          />
          <Route
            path={'/home'}
            component={HomePage}
          />
          <Route
            path={'/recipe'}
            component={RecipePage}
          />
          <Route
            path={'/create'}
            component={CreatePage}
          />
          <Route
            path={'/login'}
            component={LoginPage}
          />
          <Route
            path={'/register'}
            component={RegisterPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;