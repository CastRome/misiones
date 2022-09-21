import { useSelector } from "react-redux"

const Counter = () => {
 const dataCounter = useSelector((state) => state.counter.value)
  return (
   <h2>{dataCounter}</h2>
  )
}

export default Counter