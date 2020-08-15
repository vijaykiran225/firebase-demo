import React, { useState } from 'react';

function App() {

  const [data, setData] = useState({});
  const [txnId, setTxnId] = useState("");
  const inpHandler = (e) => {
    setTxnId(e.target.value);
  };

  const buttonHandler = () => {

    fetch(`/api/txn/${txnId}`)
      .then(d => d.json())
      .then(d => setData(d))
      .catch(console.log);
  };

  return (
    <div className="App">
      <input type="text" id="pid" onChange={inpHandler} /><br></br>
      <button onClick={buttonHandler}>click</button><br></br>
      this is the data
      <br></br>
      {data.id} is {data.from} ={`>`} {data.to} with {data.amount}
    </div>
  );
}

export default App;
