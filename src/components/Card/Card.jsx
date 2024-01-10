// to use State we need Hooks
// Hooks small bits of behavior
// {} = all of State
import { useState } from 'react';


function Card({ globalName }) {
  const [myName, setMyName] = useState('Myron');
  const [addNumber, setAddedNumber] = useState(0)

//props.globalName

  function clickAddNumber(){
    //add number to counter
    console.log('Number Added');
    setAddedNumber(addNumber + 1);


  }


  function clickChangeName() {
    //set name to new name
    console.log('test');
    setMyName('MYRON');
  }
    return (
        <div className="card">
        <button onClick={clickAddNumber}>You pressed me {addNumber} times</button>
        <p>{globalName ? globalName : myName}</p> 
        
        <button onClick={clickChangeName}>Change Name</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );
}

export default Card;