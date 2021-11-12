import React, {useEffect, useState} from 'react';
import {adaptFlightToClient} from './data/adapter';

const App = () => {
const [data, setData] = useState({});

const getData = () => {
  fetch('./flights.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
  .then(response => response.json())
  .then(({result: {flights}}) => {
    setData(adaptFlightToClient(flights[1]));
  });
};

useEffect(() => {
  getData();
  console.log(data);
}, []);

  return (
    <div>
      App component
      {/* {data} */}
    </div>
  );
};

export default App;
