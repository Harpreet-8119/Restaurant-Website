import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import IMG01 from './assets/img01.jpg';
import IMG02 from './assets/img02.jpg';
import IMG03 from './assets/img03.jpg';
import IMG04 from './assets/img04.jpg';
import IMG05 from './assets/img05.jpg';
function Cards() {
  return (
    <div className='cards'>
      <h2>Japanese Traditional Food</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={IMG01}
              path='/services'
            />
            <CardItem
              src={IMG02}
              // text="Travel through the Islands of Bali in a Private Cruise" 
              // label="Udon"
              path='/services'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src={IMG03}
              path='/services'
            />
            <CardItem
              src={IMG04}
              path='/services'
            />
            <CardItem
              src={IMG05}
                path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
