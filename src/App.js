import './App.css';
import Footer from './componentes/footer/footer';
import Main from './componentes/main/main';
// import Info from './componentes/informacion/info.jsx';
import Header from './componentes/header/header';
// import { BrowserRouter as Router, Route, RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        {/* <Router> */}
   

        <Header />
        <Main />
        <Footer />
        {/* <Info /> */}

        {/* <RouterProvider>
          <Route exact path="/info" element={ <Main/> } />
          <Route exact path="/" element={ <Header/> } />
          <Route exact path="/contacto" element={ <Footer/> } />
        </RouterProvider>
      </Router> */}
    </div>

  );
}

export default App;
