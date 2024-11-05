
import './App.css'
import Header from './components/Header'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './components/Component4'
import Component5 from './components/Component5'
import Component6 from './components/Component6'
import Component7 from './components/Component7'
import Footer from './components/Footer'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  
  return (
    <body className='bg-[#F7F6F4]'>
      <BrowserRouter>

      <Routes>
        <Route path="/login" element={<Login/>}  />

      </Routes>
      </BrowserRouter>
      <Header></Header>
      <Component1></Component1>
      <Component2></Component2>
      <Component3></Component3>
      <Component4></Component4>
      <Component5></Component5>
      <Component6></Component6>
      <Component7></Component7>
      <Footer></Footer>
    </body>
  )
}

export default App
