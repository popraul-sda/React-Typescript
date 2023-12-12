import React from 'react';
import { RootState } from './state/store';
import { increment, decrement } from './state/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const StateTutorial4 = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <p>Redux2</p>
            <h2>{count}</h2>
            {
                count < 2 ? 
                    <button onClick={() => dispatch(increment())}>Increment</button>
                    :
                    <button onClick={() => dispatch(decrement())}>Decrement</button>
            }
        </>
    )
}