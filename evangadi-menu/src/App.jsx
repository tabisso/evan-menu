import React, { Component } from 'react'
import Header from './Components/Header'
import FoodList from "./Components/FoodList" 
import menu from './commonResource/data'


 class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header/>
        <FoodList items ={menu}/>
        
      </div>
    )
  }
}

export default App;
