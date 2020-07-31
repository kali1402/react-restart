// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Name from '../components/Name';
// import { krnamechange, ennamechange } from '../modules/name';

// function NameContainer() {
//     const { krname, enname } = useSelector(state => ({
//         krname: state.name.krname,
//         enname: state.name.enname,
//     }));

//     const dispatch = useDispatch();
//     const [names, setNames] = useState("");
//     const onKrname = () => dispatch(krnamechange(names));
//     const onEnname = () => dispatch(ennamechange(names));

//     return (
//         <Name
//             names={names}
//             setNames={setNames}
//             onKrname={onKrname}
//             onEnname={onEnname}
//             krname={krname}
//             enname={enname}
//         />
//     );
// }

// export default NameContainer;