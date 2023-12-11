import { useDispatch, useSelector } from "react-redux";
import { RootState } from './state/store';
import { increment, decrement } from './state/counter/counterSlice';

export const StateTutorial3 = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Redux</p>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}