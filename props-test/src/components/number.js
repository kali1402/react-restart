import React from 'react';

function Number({ number, plus, minus }) {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={plus}>up</button>
            <button onClick={minus}>down</button>
        </div>
    )
}
export default Number;