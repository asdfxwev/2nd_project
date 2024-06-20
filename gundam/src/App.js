import './App.css';
import Header from './header/Header'
import Main from './main/Main';
import ItemList from './ItemList/ItemList';
import ItemCard from './ItemList/ItemCard'
import ItemDataBase from './ItemList/ItemDataBase'
import ItemDetail from './ItemDetail/ItemDetail';
import { Routes, Route, NavLink,} from 'react-router-dom';
import { useState, useEffect} from 'react'




function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {

    setItems(ItemDataBase);
  }, []);

  return (
    <div className="App">
      <Header />
      <ItemList items={items} />
    </div>
  );
}

export default App;
