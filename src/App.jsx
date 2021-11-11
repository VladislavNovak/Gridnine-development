/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';

const adaptFlightToClient = ({flightToken, flight}) => {
  const firstTransfer = flight.legs[0].segments.length - 1;
  const secondTransfer = flight.legs[1].segments.length - 1;

  return {
  id: flightToken,
  carrier: flight.carrier.caption,
  price: flight.price.totalFeeAndTaxes.amount,

  firstTravelDuration: flight.legs[0].segments[0].travelDuration,
  firstAirline: flight.legs[0].segments[0].airline.caption,
  firstTransfer,

  firstDepartureCity: flight.legs[0].segments[0].departureCity.caption,
  firstDepartureAirport: flight.legs[0].segments[0].departureAirport.caption,
  firstDepartureAirportTag: flight.legs[0].segments[0].departureAirport.uid,
  firstDepartureDate: flight.legs[0].segments[0].departureDate,

  firstArrivalCity: (flight.legs[0].segments[firstTransfer] && flight.legs[0].segments[firstTransfer].arrivalCity && flight.legs[0].segments[firstTransfer].arrivalCity.caption),
  firstArrivalAirport: flight.legs[0].segments[firstTransfer].arrivalAirport.caption,
  firstArrivalAirportTag: flight.legs[0].segments[firstTransfer].arrivalAirport.uid,
  firstArrivalDate: flight.legs[0].segments[firstTransfer].arrival,

  secondTravelDuration: flight.legs[1].segments[0].travelDuration,
  secondAirline: flight.legs[1].segments[0].airline.caption,
  secondTransfer,

  secondDepartureCity: (flight.legs[1].segments[0] && flight.legs[1].segments[0].departureCity && flight.legs[1].segments[0].departureCity.caption),
  secondDepartureAirport: flight.legs[1].segments[0].departureAirport.caption,
  secondDepartureAirportTag: flight.legs[1].segments[0].departureAirport.uid,
  secondDepartureDate: flight.legs[1].segments[0].departureDate,

  secondArrivalCity: (flight.legs[1].segments[secondTransfer] && flight.legs[1].segments[secondTransfer].arrivalCity && flight.legs[1].segments[secondTransfer].arrivalCity.caption),
  secondArrivalAirport: flight.legs[1].segments[secondTransfer].arrivalAirport.caption,
  secondArrivalAirportTag: flight.legs[1].segments[secondTransfer].arrivalAirport.uid,
  secondArrivalDate: flight.legs[1].segments[secondTransfer].arrivalDate,

};};

const sorting = ({result: {flights}}) => {
  // console.log(`flights: `, flights);
  const yyy = flights[67];
  const xxx = adaptFlightToClient(yyy);
  // const xxx = flights.slice(0, 67).map(flight => adaptFlightToClient(flight));
  // const xxx = flights.filter(flight => flight.flight.legs[0].segments.length < 2).slice(0, 5).map(flight => adaptFlightToClient(flight));
  // const xxx = flights.filter(flight => flight.flight.legs[0].segments.length === 2).slice(0, 5).map(flight => adaptFlightToClient(flight));
  // console.log(`adapt: `, xxx);
};

const App = () => {
const [data, setData] = useState({});

const getData = () => {
  fetch('./flights.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
  .then(response => response.json())
  .then(function(myJson) {
    sorting(myJson);
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
