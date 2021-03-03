import React from 'react';
import '../../styles/pieces/CategoryContainer.css';

import CategoryCircle from '../pieces/CategoryCircle';

import Brownie from '../../img/icons/cupcake-icon.jpg';
import Cake from '../../img/icons/iconopastel.jpg';
// import CupCake from '../../img/icons/cupcakeIcon.png';
import Pie from '../../img/icons/cake1.jpg';

function CategoryContainer (props) {
    return (
        <div className='CategoryContainer'>
            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Brownie} ImgURL={Brownie}/>
            </div>

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Cake} ImgURL={Cake}/>
                
            </div>

            {/* <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.CupCake} ImgURL={CupCake}/>
            </div> */}

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Pie } ImgURL={Pie}/>
                
            </div>
            
        </div>
    )
}

export default CategoryContainer;