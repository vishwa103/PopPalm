import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';

function App() {
  return (
    <div className='global-style'>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
