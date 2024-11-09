import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import GalleryImages from './pages/GalleryImages';

function App() {
  return (
    <div className='global-style'>
    
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery/:category?' element={<Gallery />} />
          <Route path='/galleryimages/:category' element={<GalleryImages />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
