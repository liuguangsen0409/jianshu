import React, { Component } from 'react'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style.js'
import { GlobalIconStyle } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <GlobalIconStyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </React.Fragment>
    )
  }
}

export default App
