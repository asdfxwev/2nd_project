import './App.css';
import Header from './header/Header'
import Main from './main/Main';
import Footer from './Footer/Footer'
import ItemList from './ItemList/ItemList';
import ItemDetail from './ItemDetail/ItemDetail';
import { Routes, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer/Footer';



function App() {


  return (
    <div className="App">
      <Header />

      <Main />
      <Footer />
    </div>
  );
}

export default App;
