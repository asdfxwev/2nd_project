import './App.css';
import Header from './header/Header'
import Main from './main/Main';
import Footer from './Footer/Footer';




function App() {


  return (
    <div className="App" style={{overflowX:'hidden'}}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
