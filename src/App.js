
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import MustTry from './components/MustTry';
import Location from './components/Location';
import Footer from './components/Footer';
import {ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <>
    <ShopContextProvider>
    <AppBar/>
    <Banner/>
    <Menu/>
    <MustTry/>
    <Location/>
    <Footer/>
    </ShopContextProvider>
    </>
  );
}

export default App;
