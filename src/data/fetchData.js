import {adaptFlightToClient} from "./adapter";
// import {adaptFlightToClient, getUniqueCarriers} from "./adapter";

export const fetchServerData = async (limit = null) => (
  fetch('./flights.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(({result: {flights}}) => {
      const amountOfElements = ((limit === null) || (limit > flights.length)) ? limit = flights.length : limit;
      return adaptFlightToClient(flights, amountOfElements);
    })
    // .then(flights => ({flights, uniqueCarriers: getUniqueCarriers(flights)}))
);
