import React, { Component } from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import One from './component/One'
export class App extends Component {
  render() {
    return (
      <>
      <Router>
        <One/>
      </Router>
        
      </>
    )
  }
}

export default App


