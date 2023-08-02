import React from 'react';
import '../App.css';
import './homeabout.css';
import IMG13 from './assets/img-13.jpg';
function Homeabout() {
    return (
        <>
            <div className='homeabout'>
                <div className='homeabout__container'>
                    <div className='homeabout__content'>
                        <h3>Restaurant Life</h3>
                        <h2>Meet our Chef</h2>
                        <span>Lorem ipsum dolor sit amet, consecte turmi neads en se se
                            adipisicing elit, sed do eiusm od tempor ens inc a didunt ut labore et dolo re magna aliqua.
                            Ut enim ad minim veniav, quis nostrud exerci se reprehenderit nvolup.</span>
                        <p>Aperiam, eaque ipsa quae ab illo inventorm dom se ns verit atis et quasi architecto
                            beat ae vitae dicta sunt expli cabo. Nem odit aut fugit, sed quia consequun tur magni
                            dolors.
                            res eos Neque porro quisquam and en expli cabo. Nem odit aut fugit, sedquiac onsequ.</p>
                        <button>Explore More</button>
                    </div>
                    <div className='chef__img'>
                        <img src={IMG13}/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Homeabout;