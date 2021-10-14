import React, { useState, useCallback }from 'react';
import { ShowIncrement } from './ShowIncrement';

import './memorize.css'

export const CallBackHook = () => {

    const [counter, setCounter] = useState( 10 );

    //const increment = () => {
    //    setCounter( counter + 1 );
    //}

    const increment = useCallback ( (num) => {
        setCounter ( c => c + num );
    }, [ setCounter ])


    return (
        <div>
            <h1>useCallBack Hook : { counter }</h1>
            <hr/>

            <ShowIncrement increment={ increment }/>
        </div>
    )
}
