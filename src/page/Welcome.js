import React from 'react'
import './Welcome.css'
import welcomwpicture from 'C:/Users/Srdjan/my-first-react-app/src/picture/slide_1.jpg'

const Welcome =()=>{

    return(
        <div className='starting'>
        <h1>WELCOME</h1>
            <h2>Buying from home.Something the best you can afford. </h2>
            <h2>Everything you order delivery to your home address.</h2>
        <img className='pic' src={welcomwpicture} width="900" height='400'></img>
        </div>
    )
}

export default Welcome;