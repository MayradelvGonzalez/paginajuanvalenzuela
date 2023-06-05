import './App.css';
import Footer from './componentes/footer/footer';
import Main from './componentes/main/main';
import Header from './componentes/header/header';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router> */}

        <Header />
        <Main />
        <Footer />

        {/* <Switch>
          <Route exact path="/info" element={ <Main/> } />
          <Route exact path="/" element={ <Header/> } />
          <Route exact path="/contacto" element={ <Footer/> } />
        </Switch> */}
      {/* </Router> */}
    </div>

  );
}

export default App;
