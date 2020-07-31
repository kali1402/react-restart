import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Index from '../components/Index';
import { increase, decrease } from '../modules/age';
import { krnamechange, ennamechange } from '../modules/name';

function IndexContainer() {
    const { krname, enname } = useSelector(state => ({
        krname: state.name.krname,
        enname: state.name.enname,
    }));

    const { number } = useSelector(state => ({
        number: state.age.number,
    }));

    const dispatch = useDispatch();
    const [names, setNames] = useState("");
    const onKrname = () => dispatch(krnamechange(names));
    const onEnname = () => dispatch(ennamechange(names));
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());

    return (
        <Index
            names={names}
            setNames={setNames}
            onKrname={onKrname}
            onEnname={onEnname}
            krname={krname}
            enname={enname}
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
}

export default IndexContainer;