import React, { useState } from 'react';
import '../../src/styles/mainviews/CategoryCake.css';
import ProductContainer from './pieces/ProductContainer';
import BgVector from './pieces/BgVector';
import CircleLogo from './pieces/CircleLogo';
import CategoryContainer from './pieces/CategoryContainer';
import BackButton from './pieces/BackButton';
import Order from '../components/mainviews/Order';
import data from '../components/data';
import Total from './pieces/Total';

function BuyCar () {

    const {products} = data;

    const [status, setStatus] = useState(0);
    
    const [carItems, setCarItems] = useState([]);

    // creating a function to add products to our shopping car
    const onAdd = (product) => {

        const exist = carItems.find(x => x.id === product.id);

        if(exist) {
            setCarItems(carItems.map(x => x.id === product.id ? 
                {...exist, qty: exist.qty +1} : x))
        } else {
            setCarItems([...carItems, {...product, qty: 1}]);
        }
    }
        console.log(carItems)
    // creating a function to add products to our shopping car
    const onRemove = (product) => {

        const exist = carItems.find((x) => x.id === product.id);
        if (exist) {
            if(exist.qty === 1) {
                setCarItems(carItems.filter((x) => x.id !== product.id));
            } else {
                setCarItems(carItems.map(x => x.id === product.id ? 
                {...exist, qty: exist.qty - 1} : x));
            }
        }
        
    }

    const  BrownieStatus = () => {
        setStatus(0);
    } 

    const  CakeStatus = () => {
        setStatus(1);
    } 

    const  CupCakeStatus = () => {
        setStatus(2);
    } 

    const  PieStatus = () => {
        setStatus(3);
    }

    const  OrderStatus = () => {
        setStatus(4);
    }

    return (
        <div className='CategoryCakeContainer'>

            <BgVector />

            <div className='Rectangle'>
                <CircleLogo />

                {(status < 4) ? 
                    <CategoryContainer 
                        Brownie = {BrownieStatus}
                        Cake = {CakeStatus}
                        CupCake = {CupCakeStatus}
                        Pie = {PieStatus}
                    /> : ''
                }
                
                <div className='ListContainer'>

                    {products.map((product) => {
                        let counter = 0;
                        carItems.forEach(item => {
                          if (item.id === product.id) {
                            counter = item.qty
                          }
                        });

                        if (status === 0) {
                            return (
                                ( product.category === 'brownie') ? 
                                    <div>
                                        <ProductContainer 
                                            key={product.id}
                                            product={product}
                                            onAdd = {onAdd}
                                            onRemove = {onRemove}
                                            counter={counter}
                                       />
                                    </div> : ''
                            )
                        } else  if (status === 1) {
                            return (
                                ( product.category === 'torta') ? 
                                    <div>
                                        <ProductContainer 
                                            key={product.id}
                                            product={product}
                                            onAdd = {onAdd}
                                            onRemove = {onRemove}
                                            counter={counter}    
                                        />
                                    </div> : ''
                            )
                        } else  if (status === 2) {
                            return (
                                ( product.category === 'cupcake') ? 
                                    <div>
                                        <ProductContainer 
                                            key={product.id}
                                            product={product}
                                            onAdd = {onAdd}
                                            onRemove = {onRemove}
                                            counter={counter}
                                        />
                                    </div> : ''
                            )
                        } else  if (status === 3) {
                            return (
                                ( product.category === 'pie') ? 
                                    <div>
                                        <ProductContainer 
                                            key={product.id}
                                            product={product}
                                            onAdd = {onAdd}
                                            onRemove = {onRemove}
                                            counter={counter}
                                        />
                                    </div> : ''
                            )
                        } else {
                            return ('')
                        }
                    })}
                </div>
                
                {(status === 4) ? 
                    <Order carItems={carItems}
                        Brownie = {BrownieStatus}
                        onAdd = {onAdd}
                        onRemove = {onRemove}
                        
                    /> : ''
                }
                
                {(status < 4) ? 
                    <BackButton Text='Ver orden' Order={OrderStatus}/> : ''
                }
                
                <Total carItems={carItems}/>
              
                
            </div>
        </div>

        
            
        
    )
}

export default BuyCar;