import React, { useState } from 'react';

export const StateTutorial = () =>{

    const [string, setString] = useState("");

    const onchange = (event) => {
        setTimeout(() => setString(event.target.value), 300);
    }

    return (
        <div>
            <input placeholder='type here...' onChange={onchange}/>
            <p>{string}</p>
        </div>
    )
}

