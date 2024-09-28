import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

// action perfom use  Dispatch 
// actiion only show not perform then use useSelector

const Counter1 = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter 1: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter1;
