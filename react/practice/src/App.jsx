
import './App.css'
import CounterApp from './components/CounterApp'
import CounterRedux from './components/CounterRedux'
import TimerApp from './components/TimerApp'
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login'

function App() {

  return (
    <>
      {/* <CounterApp/> */}
      {/* <CounterRedux/> */}
      {/* <TimerApp/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
