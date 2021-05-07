import React from 'react'


function Introhook(props) {
    return (
        <>        
            <h1>Props Hook</h1>
            {props.test}
        </>
    )
}

Introhook.propTypes = {
    
}

export default Introhook
