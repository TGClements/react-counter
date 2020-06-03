import React, { useState, Fragment } from 'react';

function Display({ numbers }) {
  // const [display,setDisplay] = useState(0);

  return (
    <section className='display'>
      <h3>Count</h3>
      <p>{numbers[numbers.length - 1]}</p>
    </section>
  );
}

export default Display;
