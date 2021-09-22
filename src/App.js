import './App.css';

//rcc
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News pageSize = {4}></News>
      </div>
    )
  }
}

// 153e324c9b5847f58a17aae8fe1569a2