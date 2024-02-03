
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import MustTry from './components/MustTry';
import Comments from './components/Comments';

function App() {
  return (
    <>
    <AppBar/>
    <Banner/>
    <Menu/>
    <MustTry/>
    <Comments/>
    <div className='text-center my-3 text-dark small'>copyright 2022-2024</div>
    </>
  );
}

export default App;
