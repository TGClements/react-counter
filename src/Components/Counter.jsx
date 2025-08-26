import React, { useState } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';
import History from './History';

function Counter() {
  const [numbers, setNumbers] = useState([0]);

  return (
    <div className='counter grid-container'>
      <ButtonPad numbers={numbers} setNumbers={setNumbers} />
      <Display numbers={numbers} />
      <History numbers={numbers} />
    </div>
  );
}

export default Counter;
