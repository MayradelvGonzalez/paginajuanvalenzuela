import './App.css';
import Footer from './componentes/footer/footer';
import Main from './componentes/main/main';
// import Info from './componentes/informacion/info.jsx';
import Header from './componentes/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter> 
      <Routes> 
        <Header />
        <Route path='/composiciones' element={ <Footer />} />
        <Main />
        {/* <Footer /> */}
        </Routes>
        </BrowserRouter> 
    </div>

  );
}

export default App;
