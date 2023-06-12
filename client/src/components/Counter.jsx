import {useDispatch, useSelector} from "react-redux"
import {decrement, increment, reset} from "../stores/counter.js"

const Counter = () => {
  const total = useSelector(state => state.counter).total
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{total}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  )
}

export default Counter
