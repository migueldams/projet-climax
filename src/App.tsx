import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'

function App() {


  return (
    <Router >
      <div className='w-screen'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/service' element={<Service />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
        </Routes>
        <Footer />
      </div>

    </Router>
  )
}

export default App
