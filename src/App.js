import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Futter from './components/Futter/Futter';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contacts/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route path ='/home'>
         <Home></Home>

       </Route>
       <Route path='/about'>
         <About></About>


       </Route>
       <Route path='/services'>
         <Services></Services>


       </Route>
       <Route path='/registration'>
         <Contact></Contact>

       </Route>

       <Route path='*'>
         <NotFound></NotFound>

       </Route>

     </Switch>
     <Futter></Futter>
     </BrowserRouter>
    </div>
  );
}

export default App;
