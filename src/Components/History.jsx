import React, { useState, Fragment } from 'react';

function History({ numbers }) {
  // const [history,setHistory] = useState(0);

  return (
    <div className='history'>
      <h3>History</h3>
      <div className='historyPanel'>
        {numbers
          .map((num, i) => {
            return (
              <div key={i}>
                <p className='histNum'>{num}</p>
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
}

export default History;
