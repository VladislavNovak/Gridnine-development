import {adaptFlightToClient} from "./adapter";

const status = function (response) {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText));
  }
  return Promise.resolve(response);
};

const json = function (response) {
  return response.json();
};

export const fetchServerData = async (limit = null) => (
  fetch('./flights.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(status)
    .then(json)
    .then(({result: {flights}}) => {
      const amountOfElements = ((limit === null) || (limit > flights.length)) ? limit = flights.length : limit;
      return adaptFlightToClient(flights, amountOfElements);
    })
);
