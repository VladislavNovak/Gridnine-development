import {adaptFlightToClient} from "./adapter";
import {HTTP_HEADERS, PATH_TO_SERVER} from "./constants";

const handleErrors = (response) => {
  if (!response.ok) {
    return Promise.reject(new Error(response.statusText));
  }
  return Promise.resolve(response);
};

const json = (response) => response.json();

const runAdapter = ({result: {flights}}, limit) => {
  const amountOfElements = ((limit === null) || (limit > flights.length)) ? limit = flights.length : limit;
  return adaptFlightToClient(flights, amountOfElements);
};

export const fetchServerData = async (limit = null) => (
  fetch(PATH_TO_SERVER, HTTP_HEADERS)
    .then(handleErrors)
    .then(json)
    .then((data) => runAdapter(data, limit))
);
