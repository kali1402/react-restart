import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus, set_diff, plus_async, minus_async } from '../modules/counter';


function CounterContainer() {
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    const dispatch = useDispatch();

    const onPlus = () => dispatch(plus_async());
    const onMinus = () => dispatch(minus_async());
    const onSetDiff = (diff) => dispatch(set_diff(diff));

    return (
        <>
            <Counter
                number={number}
                diff={diff}
                onPlus={onPlus}
                onMinus={onMinus}
                onSetDiff={onSetDiff}
            />
        </>
    );
};

export default CounterContainer;