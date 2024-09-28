import {useSelector,useDispatch} from "react-redux";
import { increment,decrement } from "./1slice";

const Use1 = () => {


const countvalue = useSelector((state) => state.counter.count)
const actionValue = useDispatch();



    return (
    <div>
<button onClick={actionValue(increment())} >Increment</button>
<button onClick={actionValue(decrement())} >Decrement</button>
        
    </div>
  )
}

export default Use1