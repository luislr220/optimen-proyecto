import { Route, Routes } from 'react-router-dom';
import './App.css';

/*COMPONENTES*/
import Navbar from './components/Navegacion/Navbar';
import Home from './components/Navegacion/Home';
import ContactUs from './components/Navegacion/ContactUs';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
