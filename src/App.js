import React, { Component } from 'react'
import Header from './common/header'
import { GlobalStyle } from './style.js'
import { GlobalIconStyle } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <GlobalIconStyle />
        <Header />
      </React.Fragment>
    )
  }
}

export default App
