import React from 'react';

function Counter({ diff, onPlus, onMinus, onSetDiff, number }) {

    const onChange = (e) => {
        onSetDiff(parseInt(e.target.value, 10))
    }

    return (
        <>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} onChange={onChange} />
                <button onClick={onPlus}>+</button>
                <button onClick={onMinus}>-</button>
            </div>
        </>
    );
};

export default Counter;