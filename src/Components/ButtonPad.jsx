import React from 'react';

export default function ButtonPad({ numbers, setNumbers }) {
  return (
    <div className='numPad'>
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] + 1));
        }}
      >
        +1
      </button>
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] - 1));
        }}
      >
        -1
      </button>
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] + 10));
        }}
      >
        +10
      </button>
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] - 10));
        }}
      >
        -10
      </button>
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] + 100));
        }}
      >
        +100
      </button>
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] - 100));
        }}
      >
        -100
      </button>
      <div></div> {/* Empty div for grid layout */}
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] + 1000));
        }}
      >
        +1000
      </button>
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] - 1000));
        }}
      >
        -1000
      </button>
      <div></div> {/* Empty div for grid layout */}
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] * 859));
        }}
      >
        *859
      </button>
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] / 859));
        }}
      >
        /859
      </button>
      <div></div> {/* Empty div for grid layout */}
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(Math.pow(numbers[numbers.length - 1], 11)));
        }}
      >
        x¹¹
      </button>
      <button
        className='numBut'
        onClick={() => {
          setNumbers(
            numbers.concat(Math.pow(numbers[numbers.length - 1], 1 / 11))
          );
        }}
      >
        11√x
      </button>
      <div></div> {/* Empty div for grid layout */}
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] >> 7));
        }}
      >
        x &gt;&gt; 7
      </button>
      <button
        className='numBut'
        onClick={() => {
          setNumbers(numbers.concat(numbers[numbers.length - 1] << 7));
        }}
      >
        x &lt;&lt; 7
      </button>
      {/* Buttons to Clear */}
      <button
        className='clearBut clearCount'
        onClick={() => {
          setNumbers(numbers.concat(0));
        }}
      >
        Clear Count
      </button>
      <button
        className='clearBut nuke'
        onClick={() => {
          setNumbers([0]);
        }}
      >
        NUKE IT ALL!!!
      </button>
    </div>
  );
}
