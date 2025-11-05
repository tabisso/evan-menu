import React, { Component } from 'react'
import FoodItem from './FoodItem'

export default class FoodList extends Component {
  render() {
    const {items} = this.props;
     return (
      <div className='foods-container'>
        {items.map((food)=> (
          <FoodItem key = {food.id} item ={food}/>))}
        
      </div>
    )
  }
}
