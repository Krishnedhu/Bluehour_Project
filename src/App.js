import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navcmp from './components/Navcmp';
import Home from './components/Home';
import UserForm from './components/UserForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navcmp />
      <main className='py-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/UserForm' element={<UserForm />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
