import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './Components/Header';
import "./Styles/App.scss";
import "./Styles/Header.scss";
import "./Styles/Home.scss";
import "./Styles/Footer.scss";
import "./Styles/Contact.scss";

import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';

function App() {
  return (

    <Router>

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Services' element={<Services/>}/>
      </Routes>

      <Footer/>

    </Router>

  );
}

export default App;
