import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='global-style'>
    <HashRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      <Footer/>
      </HashRouter>
      </div>
  )
}

export default App
