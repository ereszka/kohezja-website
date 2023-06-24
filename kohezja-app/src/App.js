import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './screens/Home';
import Actions from './screens/Actions';
import Team from './screens/Team';
import Documents from './screens/Documents';
import Donate from './screens/Donate';
import Contact from './screens/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/actions' element={<Actions/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/documents' element={<Documents/>} />
          <Route path='/donate' element={<Donate/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
