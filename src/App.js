import './App.css';
import Composiciones from './componentes/composiciones/composiciones';
import Main from './componentes/main/main';
import Header from './componentes/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componentes/footer/footer';

function App() {
  return (
    // <div className="App"> 
      <BrowserRouter>
      <Header /> 
      <Routes> 
        <Route path='/composiciones' element={ <Composiciones />} />
        <Route path='/' element={ <Main />} />
        </Routes>
        <Footer />
        </BrowserRouter> 
    // </div>

  );
}

export default App;
