import React,{ useState } from 'react';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';


import './FocusScreen.css';


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example</h1>
            <hr/>

            { show && <MultipleCustomHook/> }

            <button
                className="btn btn-primary mt-5"
                onClick={ () =>{
                    setShow( !show )
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
