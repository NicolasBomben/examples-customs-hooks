import React from 'react'

export const Small = React.memo((({ value }) => {

    console.log('I called again :(')

    return (
        <small>
            { value }
        </small>
    )
    
}));
