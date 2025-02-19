import Home from './Components/FunctionComponents/Home'
import About from './Components/FunctionComponents/About'
import Image from './Components/FunctionComponents/Image'
import Signup from './Components/FunctionComponents/SignUp'
// import Contact from './Components/FunctionComponents/Contact'
import UseEffectComponent from './Components/FunctionComponents/Hooks/useEffect'
import Navbar from './Components/FunctionComponents/Navbar'
import Gallery from './Components/FunctionComponents/Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home properties="OKAY" sjit="BYE" />} />
          <Route path='/about' element={<About />} />
          <Route path='/img' element={<Image />} />
          <Route path='/use-effect' element={<UseEffectComponent />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
