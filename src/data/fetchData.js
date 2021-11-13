import {adaptFlightToClient, getUniqueCarriers} from "./adapter";

export const fetchServerData = async () => (
  fetch('./flights.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(({result: {flights}}) => adaptFlightToClient(flights))
    .then(flights => ({flights, uniqueCarriers: getUniqueCarriers(flights)}))
);
