// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Age from '../components/Age';
// import { increase, decrease } from '../modules/age';

// function AgeContainer() {
//     const { number } = useSelector(state => ({
//         number: state.age.number,
//     }));

//     const dispatch = useDispatch();
//     const onIncrease = () => dispatch(increase());
//     const onDecrease = () => dispatch(decrease());

//     return (
//         <Age
//             number={number}
//             onIncrease={onIncrease}
//             onDecrease={onDecrease}
//         />
//     );
// }

// export default AgeContainer;