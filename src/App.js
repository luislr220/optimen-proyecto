import { Route, Routes } from 'react-router-dom';
import './App.css';

/*COMPONENTES*/
import Navbar from './components/Navegacion/Navbar';
import Home from './components/Navegacion/Home';
import ContactUs from './components/Navegacion/ContactUs';
import News from './components/Navegacion/News'
import Services from './components/Navegacion/Services'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/News' element={<News/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
