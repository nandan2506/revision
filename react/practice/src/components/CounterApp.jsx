import React, { useContext } from 'react'
import { counterContext } from '../contextApi/counter.context'

export default function CounterApp() {
    const {counter,countPlus,countMinus} = useContext(counterContext)
  return (
    <div>
      <h1>count: {counter}</h1>
      <button onClick={countPlus}>+</button>
      <button onClick={countMinus}>-</button>
    </div>
  )
}
