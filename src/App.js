import React, { Component } from 'react'
import Header from './common/header'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style.js'
import { GlobalIconStyle } from './statics/iconfont/iconfont'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <GlobalIconStyle />
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Route path='/' exact component={ Home } ></Route>
            <Route path='/detail' exact component={ Detail } ></Route>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    )
  }
}

export default App
