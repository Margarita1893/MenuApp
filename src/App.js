import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from '../src/components/mainviews/Home.jsx';
import Description from '../src/components/mainviews/Description.jsx';
import Order from '../src/components/mainviews/Order';
// import CategoryCake from './components/mainViews/CategoryCake.jsx';
import BuyCar  from './components/BuyCar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Menu" component={BuyCar}/>
        <Route exact path="/Descripcion" component={Description}/>
        <Route exact path="/Orden" component={Order} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
