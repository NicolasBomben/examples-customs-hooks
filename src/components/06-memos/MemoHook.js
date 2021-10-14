import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess} from '../../helpers/HeavyProcess';
import './memorize.css'


export const MemoHook = () => {


    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState( true );

    const memoHevyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>

            <h3>Counter : { counter }  </h3>
            <hr/>

            <p> { memoHevyProcess }</p>


            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1        
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show )}
            </button>
            
        </div>
    )
}