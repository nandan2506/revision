import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { countMinus, countPlus, countReset } from '../features/counterSlice'

export default function CounterRedux() {
    const count = useSelector((state)=>state.counterApp.count)
    const dispatch = useDispatch()


  return (
    <div>
      <h1>count: {count} </h1>
      <button onClick={()=>dispatch(countPlus())} >+</button>
      <button onClick={()=>dispatch(countMinus())} >-</button>
      <button onClick={()=>dispatch(countReset())} >0</button>
    </div>
  )
}
