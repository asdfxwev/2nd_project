import './App.css';
import Header from './header/Header'
import Main from './main/Main';
import ItemList from './ItemList/ItemList';
import ItemDetail from './ItemDetail/ItemDetail';
import { Routes, Route, NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
