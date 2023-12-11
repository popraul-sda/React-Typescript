import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return { counter: state.counter + 1, text: state.text };
        case 'text':
            return { counter: state.counter, text: state.text.slice(0, -1)};
        default: 
            return state;

    }
}

export const StateTutorial2 = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0, text: "Merge"});

    return (
        <>
            <button onClick={() => {
                dispatch({type: 'increment'});
                dispatch({type: 'text'});
            }} placeholder='Buton'></button>
            <p>{state.counter}</p><p>{state.text}</p>
        </>
    )
}