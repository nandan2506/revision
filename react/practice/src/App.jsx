
import CounterApp from './components/CounterApp'
import CounterRedux from './components/CounterRedux'
import TimerApp from './components/TimerApp'
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
      {/* <CounterApp/> */}
      {/* <CounterRedux/> */}
      {/* <TimerApp/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/signUp" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
