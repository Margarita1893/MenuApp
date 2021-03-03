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
// import HPCake from '../img/cakes/imgFB/cake12.jpeg';
// import CocaCola from '../img/cakes/CocaColaCake.png';
// import Graduation from '../img/cakes/graduacionCake.jpg';
// import PlayCake from '../img/cakes/Play.png';
// import UnicornCake from '../img/cakes/UnicornCake.jpg';
// import SnakeCake from '../img/cakes/SnakeCake.png';
// import BearCake from '../img/cakes/BearCake.png';

import HearthBrownie from '../img/cakes/cupcakesp.jpg';
import SquareBrownie from '../img/cakes/cupCake.jpg';

// import FondantCupcake from '../img/cakes/CupCakeFondant.png';
// import CremaCupCake from '../img/cakes/GlaceadoCupCake.jpg';

import Pie from '../img/cakes/personalcake.jpg';

const data = {
    products: [
        {
            id: 'Torta1',
            name: 'Pastel Tik-Tok',
            pricesmall: 45000,
            pricemedium: 60000,
            pricebig: 60000,
            amount: 0,
            category: 'torta',
            Image: <Image src={Personaliza} alt='Personaliza tu torta' className='CakeImage'/>
        },
        {
            id: 'Torta2',
            name: 'Pastel Beer',
            pricesmall: 45000,
            pricemedium: 65000,
            pricebig: 90000,
            amount: 0,
            category: 'torta',
            Image: <Image src={ChocolateCake} alt='Torta de Chocolate' className='CakeImage'/>
        },
        {
            id: 'Torta3',
            name: 'Torta Infantil',
            pricesmall: 50000,
            pricemedium: 70000,
            pricebig: 95000,
            amount: 0,
            category: 'torta',
            Image: <Image src={FlowerCake} alt='Torta de Flores' className='CakeImage'/>
        },
        {
            id: 'Torta4',
            name: 'Torta Sencilla',
            pricesmall: 60000,
            pricemedium: 80000,
            pricebig: 110000,
            amount: 0,
            category: 'torta',
            Image: <Image src={UnicornFondantCake} alt='Torta unicornio en fondant' className='CakeImage'/>
        },
        {
            id: 'Torta5',
            name: 'Torta Bolttle Beer',
            pricesmall: 45000,
            pricemedium: 65000,
            pricebig: 90000,
            amount: 0,
            category: 'torta',
            Image: <Image src={BeerCake} alt='Torta jarra de cerveza' className='CakeImage'/>
        },
        {
            id: 'Torta6',
            name: 'Candy pop',
            pricesmall: 50000,
            pricemedium: 65000,
            pricebig: 95000,
            amount: 0,
            category: 'torta',
            Image: <Image src={IngCake} alt='Torta Ingeniero / Arquitecto' className='CakeImage'/>
        },
        {
            id: 'Torta7',
            name: 'Tik-Tok personalizada',
            pricesmall: 35000,
            pricemedium: 55000,
            pricebig: 80000,
            amount: 0,
            category: 'torta',
            Image: <Image src={BasicCake} alt='Torta básica' className='CakeImage'/>
        },
        {
            id: 'Torta8',
            name: 'Torta ChocoCake',
            pricesmall: 45000,
            pricemedium: 65000,
            pricebig: 90000,
            amount: 0,
            category: 'torta',
            Image: <Image src={SuperCake} alt='Torta super heroes' className='CakeImage'/>
        }, 
        {
            id: 'Torta9',
            name: 'Tik-tok 3',
            pricesmall: 40000,
            pricemedium: 60000,
            pricebig: 80000,
            amount: 0,
            category: 'torta',
            Image: <Image src={LetterCake} alt='Torta letra o número' className='CakeImage'/>
        }, 
        {
            id: 'Torta10',
            name: 'Torta Rosa',
            pricesmall: 45000,
            pricemedium: 65000,
            pricebig: 85000,
            amount: 0,
            category: 'torta',
            Image: <Image src={BikeCake} alt='Torta de cicla' className='CakeImage'/>
        },   
        {
            id: 'Torta11',
            name: 'Torta Unicornio',
            pricesmall: 50000,
            pricemedium: 70000,
            pricebig: 90000,
            amount: 0,
            category: 'torta',
            Image: <Image src={AnimalCake} alt='Torta de animal' className='CakeImage'/>
        },   
        // {
        //     id: 'Torta12',
        //     name: 'Torta Coca Cola',
        //     pricesmall: 45000,
        //     pricemedium: 65000,
        //     pricebig: 85000,
        //     amount: 0,
        //     category: 'torta',
        //     Image: <Image src={CocaCola} alt='Torta Coca Cola' className='CakeImage'/>
        // },
        // {
        //     id: 'Torta13',
        //     name: 'Torta Harry Potter',
        //     pricesmall: 45000,
        //     pricemedium: 65000,
        //     pricebig: 90000,
        //     amount: 0,
        //     category: 'torta',
        //     Image: <Image src={HPCake} alt='Torta Harry Potter' className='CakeImage'/>
        // },
        // {
        //     id: 'Torta14',
        //     name: 'Torta Control de Play',
        //     pricesmall: 60000,
        //     pricemedium: 80000,
        //     pricebig: 110000,
        //     amount: 0,
        //     category: 'torta',
        //     Image: <Image src={PlayCake} alt='Torta control de play' className='CakeImage'/>
        // },
        // {
        //     id: 'Torta15',
        //     name: 'Torta de grado',
        //     pricesmall: 45000,
        //     pricemedium: 65000,
        //     pricebig: 85000,
        //     amount: 0,
        //     category: 'torta',
        //     Image: <Image src={Graduation} alt='Torta de grado' className='CakeImage'/>
        // },
        // {
        //     id: 'Torta16',
        //     name: 'Torta de unicornio',
        //     pricesmall: 50000,
        //     pricemedium: 70000,
        //     pricebig: 95000,
        //     amount: 0,
        //     category: 'torta',
        //     Image: <Image src={UnicornCake} alt='Torta de unicornio' className='CakeImage'/>
        // },
        // {
        //     id: 'Torta17',
        //     name: 'Torta de serpiente',
        //     pricesmall: 60000,
        //     pricemedium: 80000,
        //     pricebig: 110000,
        //     amount: 0,
        //     category: 'torta',
        //     Image: <Image src={SnakeCake} alt='Torta de serpiente' className='CakeImage'/>
        // },
        // {
        //     id: 'Torta18',
        //     name: 'Torta de oso',
        //     pricesmall: 50000,
        //     pricemedium: 70000,
        //     pricebig: 90000,
        //     amount: 0,
        //     category: 'torta',
        //     Image: <Image src={BearCake} alt='Torta de oso' className='CakeImage'/>
        // },
        {
            id: 'Brownie1',
            name: 'Brownie fontdant X6 und',
            pricesmall: 23000,
            pricemedium: 23000,
            pricebig: 23000,
            amount: 0,
            category: 'brownie',
            Image: <Image src={HearthBrownie} alt='Brownie' className='CakeImage'/>
        },
        {
            id: 'Brownie2',
            name: 'CupCake Indivudual',
            pricesmall: 2500,
            pricemedium: 2500,
            pricebig: 2500,
            amount: 0,
            category: 'brownie',
            Image: <Image src={SquareBrownie} alt='Brownie' className='CakeImage'/>
        },
        // {
        //     id: 'CupCake1',
        //     name: 'Caja X6  en Fondant',
        //     pricesmall: 30000,
        //     pricemedium: 30000,
        //     pricebig: 30000,
        //     amount: 0,
        //     category: 'cupcake',
        //     Image: <Image src={FondantCupcake} alt='CupCake Fondant' className='CakeImage'/>
        // },
        // {
        //     id: 'CupCake2',
        //     name: 'Caja X6 en glaceado',
        //     pricesmall: 25000,
        //     pricemedium: 25000,
        //     pricebig: 25000,
        //     amount: 0,
        //     category: 'cupcake',
        //     Image: <Image src={CremaCupCake} alt='CupCake Crema' className='CakeImage'/>
        // },
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