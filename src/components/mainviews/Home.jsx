import React from 'react';
import Image from 'react-bootstrap/Image'
import UnicornCake from '../../img/cakes/cake-port.webp';
import '../../styles/mainviews/Home.css';
import { Link } from "react-router-dom";

import BgVector from '../pieces/BgVector';
// import SocialMedia from '../pieces/SocialMedia';
import CircleLogo from '../pieces/CircleLogo';
import BackButton from '../pieces/BackButton';
import TitleDescription from '../pieces/TitleDescription';

function Home () {
    return (
        <div className='HomeContainer'>
            <BgVector />
            <div className='RectangleHome'>
                <CircleLogo />
                <div className='Tittle1'>
            <h3 className='Tittle'>Patty Tortas</h3>                        
            </div>
                <div className='UnicornContainer'>
                    <Image src={UnicornCake} alt='TortasUnicornio' className='UnicornCake'/>
                </div>
                {/* <SocialMedia /> */}

                <Link to="/Menu" className='LinkMenu'>
                    <BackButton Text='Ver Más' />
                </Link>
                
            </div>
        </div>
    )
}

export default Home;