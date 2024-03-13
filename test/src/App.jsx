import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage';
import Projects from './pages/Projects';
import ScrollToTop from './ScrollToTop'; // Assuming ScrollToTop is in the same directory




function App() {
  
  return (
    <>
     <ScrollToTop />
    
    <Routes>
      <Route  path='/' element = {<Homepage />}/>
      <Route path='/projects' element = {<Projects />}/>

    </Routes>
    </>
    
  )
}

export default App
