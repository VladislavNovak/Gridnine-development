import {adaptFlightToClient} from "./adapter";
import {HTTP_HEADERS, PATH_TO_SERVER} from "./constants";

const handleErrors = (response) => response.ok ? Promise.resolve(response) : Promise.reject(new Error(response.statusText));

const json = (response) => response.json();

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const runAdapter = ({result: {flights}}, limit) => {
  const amountOfElements = ((limit === null) || (limit > flights.length)) ? limit = flights.length : limit;
  return adaptFlightToClient(flights, amountOfElements);
};

export const fetchServerData = async (limit = null) => (
  fetch(PATH_TO_SERVER, HTTP_HEADERS)
    .then(handleErrors)
    .then(json)
    .then(await delay(1000))
    .then((data) => runAdapter(data, limit))
);
