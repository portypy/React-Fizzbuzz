import React, { useEffect, useState } from 'react';
import './App.css';



function App() {

  const [number, setNumber] = useState(1);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (number % 3 === 0 && number % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (number % 3 === 0) {
      setAnswer("fizz")
    } else if (number % 5 === 0) {
      setAnswer("buzz")
    } else
      setAnswer(number)
  }, [number]);

  const handleAdd = () => {
    setNumber(number + 1);
  }

  return (
    <>
      <button onClick={() => handleAdd()}>Next Number</button>
      {/* <h4>{number}</h4> */}
      <h4>{answer}</h4>
    </>
  );
}

export default App;
