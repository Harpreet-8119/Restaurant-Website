import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h2>Japanese Traditional Food</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='assets/img01.jpg'
                path='/services'
                />
                <CardItem 
                src='assets/img02.jpg' 
                // text="Travel through the Islands of Bali in a Private Cruise" 
                // label="Udon"
                path='/services'
                />
               
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src='assets/img3.jpg'
                path='/services'
                />
                <CardItem 
                src='assets/img04.jpg' 
                path='/services'
                />
                <CardItem 
                src='assets/img05.jpg' 
                path='/services'
                />         
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
