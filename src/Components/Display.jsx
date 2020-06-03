import React, { useState, Fragment } from 'react';

function Display({ numbers }) {
  // const [display,setDisplay] = useState(0);

  return (
    <section className='display'>
      <h3>Count</h3>
      <div className='historyPanel' style={{ overflowY: 'hidden' }}>
        <p className='count'>{numbers[numbers.length - 1]}</p>
      </div>
    </section>
  );
}

export default Display;
