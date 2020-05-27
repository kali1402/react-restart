import React, { Fragment } from 'react';
import './App.css';

function App() {
  const name = '김현준';
  const age = '18'
  const style = {
    fontSize: 24,
    color: "blue"
  }
  return (
    <Fragment>
      <div style={style}>{name}</div>
      <div>{age}</div>
    </Fragment>
  );
}

export default App;