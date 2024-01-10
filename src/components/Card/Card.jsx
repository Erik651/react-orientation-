// to use State we need Hooks
// Hooks small bits of behavior
// {} = all of State
import { useState } from 'react';


function Card() {
  const [myName, setMyName] = useState('Myron');

  function clickChangeName() {
    //set name to new name
    console.log('test');
    setMyName('MYRON');
  }
    return (
        <div className="card">
        <button>count is 0</button>
        <p>{myName}</p>
        <button onClick={clickChangeName}>Change Name</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );
}

export default Card;