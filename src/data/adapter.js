const convertDataToClient = ({flightToken, flight}) => {
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

    firstArrivalCity: (flight.legs[0].segments[firstTransfer] && flight.legs[0].segments[firstTransfer].arrivalCity && flight.legs[0].segments[firstTransfer].arrivalCity.caption) || `UNNOWN`,
    firstArrivalAirport: flight.legs[0].segments[firstTransfer].arrivalAirport.caption,
    firstArrivalAirportTag: flight.legs[0].segments[firstTransfer].arrivalAirport.uid,
    firstArrivalDate: flight.legs[0].segments[firstTransfer].arrivalDate,

    secondTravelDuration: flight.legs[1].segments[0].travelDuration,
    secondAirline: flight.legs[1].segments[0].airline.caption,
    secondTransfer,

    secondDepartureCity: (flight.legs[1].segments[0] && flight.legs[1].segments[0].departureCity && flight.legs[1].segments[0].departureCity.caption) || `UNNOWN`,
    secondDepartureAirport: flight.legs[1].segments[0].departureAirport.caption,
    secondDepartureAirportTag: flight.legs[1].segments[0].departureAirport.uid,
    secondDepartureDate: flight.legs[1].segments[0].departureDate,

    secondArrivalCity: (flight.legs[1].segments[secondTransfer] && flight.legs[1].segments[secondTransfer].arrivalCity && flight.legs[1].segments[secondTransfer].arrivalCity.caption) || `UNNOWN`,
    secondArrivalAirport: flight.legs[1].segments[secondTransfer].arrivalAirport.caption,
    secondArrivalAirportTag: flight.legs[1].segments[secondTransfer].arrivalAirport.uid,
    secondArrivalDate: flight.legs[1].segments[secondTransfer].arrivalDate,
  };
};

// ВОЗВРАЩАЕТ АДАПТИРОВАННЫЙ ОБЪЕКТ
// Получает объект или массив объектов типа: (flights), (flights, 1), (flights[0])
// Если передан массив, то учитывается переданная вторым аргументом длина
// Если передан объект, он преобразовывается в массив
export const adaptFlightToClient = (arg, amount) => {
  return (Array.isArray(arg))
    ? (arg.slice(0, amount || arg.length).map(convertDataToClient))
    : (Array(arg).map(convertDataToClient));
};
