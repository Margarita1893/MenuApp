import React from 'react';
import '../../styles/pieces/CircleLogo.css';
import Image from 'react-bootstrap/Image'
import LogoPettit from '../../img/logo-removebg.jpg';

function CircleLogo () {
    return (
        <div className='HalfCircle'>
            <Image src={LogoPettit} alt='Pettit' className='logoPettit' roundedCircle />
        </div>
    )
}

export default CircleLogo;