import Image from 'react-bootstrap/Image';


import Personaliza from '../img/cakes/imgFB/cake1.jpeg';
import IngCake from '../img/cakes/imgFB/cake2.jpeg';
import BeerCake from '../img/cakes/imgFB/cake3.jpeg';
import FlowerCake from '../img/cakes/imgFB/cake4.jpeg';
import UnicornFondantCake from '../img/cakes/imgFB/cake5.jpeg';
import ChocolateCake from '../img/cakes/imgFB/cake6.jpeg';
import BasicCake from '../img/cakes/imgFB/cake7.jpeg';
import SuperCake from '../img/cakes/imgFB/cake12.jpeg';
import LetterCake from '../img/cakes/imgFB/cake9.jpeg';
import AnimalCake from '../img/cakes/imgFB/cake10.jpeg';
import BikeCake from '../img/cakes/imgFB/cake11.jpeg';

import HearthBrownie from '../img/cakes/cupcakesp.jpg';
import SquareBrownie from '../img/cakes/cupCake.jpg';


import Pie from '../img/cakes/personalcake.jpg';


const data = {
    
    products: [
        {
            id: 'Torta1',
            name: 'Pastel Tik-Tok',
            pricesmall: 45.000,
            pricemedium: 60.000,
            pricebig: 60.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={Personaliza} alt='Personaliza tu torta' className='CakeImage'/>
        },
        {
            id: 'Torta2',
            name: 'Pastel Beer',
            pricesmall: 45.000,
            pricemedium: 65.000,
            pricebig: 90.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={ChocolateCake} alt='Torta de Chocolate' className='CakeImage'/>
        },
        {
            id: 'Torta3',
            name: 'Torta Infantil',
            pricesmall: 50.000,
            pricemedium: 70.000,
            pricebig: 95.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={FlowerCake} alt='Torta de Flores' className='CakeImage'/>
        },
        {
            id: 'Torta4',
            name: 'Torta Sencilla',
            pricesmall: 60.000,
            pricemedium: 80.000,
            pricebig: 110.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={UnicornFondantCake} alt='Torta unicornio en fondant' className='CakeImage'/>
        },
        {
            id: 'Torta5',
            name: 'Torta Bolttle Beer',
            pricesmall: 45.000,
            pricemedium: 65.000,
            pricebig: 90.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={BeerCake} alt='Torta jarra de cerveza' className='CakeImage'/>
        },
        {
            id: 'Torta6',
            name: 'Candy pop',
            pricesmall: 50.000,
            pricemedium: 65.000,
            pricebig: 95.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={IngCake} alt='Torta Ingeniero / Arquitecto' className='CakeImage'/>
        },
        {
            id: 'Torta7',
            name: 'Tik-Tok personalizada',
            pricesmall: 35.000,
            pricemedium: 55.000,
            pricebig: 80.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={BasicCake} alt='Torta básica' className='CakeImage'/>
        },
        {
            id: 'Torta8',
            name: 'Torta ChocoCake',
            pricesmall: 45.000,
            pricemedium: 65.000,
            pricebig: 90.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={SuperCake} alt='Torta super heroes' className='CakeImage'/>
        }, 
        {
            id: 'Torta9',
            name: 'Tik-tok 3',
            pricesmall: 40.000,
            pricemedium: 60.000,
            pricebig: 80.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={LetterCake} alt='Torta letra o número' className='CakeImage'/>
        }, 
        {
            id: 'Torta10',
            name: 'Torta Rosa',
            pricesmall: 45.000,
            pricemedium: 65.000,
            pricebig: 85.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={BikeCake} alt='Torta de cicla' className='CakeImage'/>
        },   
        {
            id: 'Torta11',
            name: 'Torta Unicornio',
            pricesmall: 50.000,
            pricemedium: 70.000,
            pricebig: 90.000,
            amount: 0,
            category: 'torta',
            Image: <Image src={AnimalCake} alt='Torta de animal' className='CakeImage'/>
        },   
        
        {
            id: 'Brownie1',
            name: 'Brownie fontdant X6 und',
            pricesmall: 23.000,
            pricemedium: 23.000,
            pricebig: 23.000,
            amount: 0,
            category: 'brownie',
            Image: <Image src={HearthBrownie} alt='Brownie' className='CakeImage'/>
        },
        {
            id: 'Brownie2',
            name: 'CupCake Indivudual',
            pricesmall: 2.500,
            pricemedium: 2.500,
            pricebig: 2.500,
            amount: 0,
            category: 'brownie',
            Image: <Image src={SquareBrownie} alt='Brownie' className='CakeImage'/>
        },
       
        {
            id: 'Pie1',
            name: 'Pastel personalizado',
            pricesmall: 0,
            pricemedium: 0,
            pricebig: 0,
            amount: 0,
            category: 'pie',
            Image: <Image src={Pie} alt='Pie' className='CakeImage'/>,
            note:'Personaliza tu pastel, ¡Ordena Ahora!'
        }
    ]
}

export default data;