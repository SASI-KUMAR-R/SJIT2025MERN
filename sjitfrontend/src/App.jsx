import Home from './Components/FunctionComponents/Home'
import About from './Components/FunctionComponents/About'
import Image from './Components/FunctionComponents/Image'
import Signup from './Components/FunctionComponents/SignUp'
import UseEffectComponent from './Components/FunctionComponents/Hooks/useEffect'
import Navbar from './Components/FunctionComponents/Navbar'
import Gallery from './Components/FunctionComponents/Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/FunctionComponents/Login'
import UseEffectAPI from './Components/FunctionComponents/Hooks/useEffectAPI'
import UseRef from './Components/FunctionComponents/Hooks/useRef'
import UseMemo from './Components/FunctionComponents/Hooks/UseMemo'
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
          <Route path='/login' element={<Login />} />
          <Route path='/use-effect-api' element={<UseEffectAPI />} />
          <Route path='/use-ref' element={<UseRef />} />
          <Route path='/use-memo' element={<UseMemo />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
