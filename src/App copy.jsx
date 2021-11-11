/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';

const App = () => {
const [data, setData] = useState({});

const getData = () => {
  fetch('./flights.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(myJson) {
    console.log(`myJson: `, myJson);
    setData(myJson);
  });
};

useEffect(() => {
  getData();
}, []);

  return (
    <div>
      App component
      {/* {data} */}
    </div>
  );
};

export default App;
