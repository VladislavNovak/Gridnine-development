import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import AeroflotIcon from '../../assets/icons/01-afl logo russ.png';
import {displayDuration} from '../../utils/function';

const Card = ({flight}) => {
  const {
    price,
    firstTravelDuration,
    firstAirline,
    firstTransfer,
    firstDepartureCity,
    firstDepartureAirport,
    firstDepartureAirportTag,
    firstDepartureDate,
    firstArrivalCity,
    firstArrivalAirport,
    firstArrivalAirportTag,
    firstArrivalDate,
    secondTravelDuration,
    secondAirline,
    secondTransfer,
    secondDepartureCity,
    secondDepartureAirport,
    secondDepartureAirportTag,
    secondDepartureDate,
    secondArrivalCity,
    secondArrivalAirport,
    secondArrivalAirportTag,
    secondArrivalDate,} = flight;

  return (
    <li className="card">
      <div className="card__header">
        <img className="card__icon" src={AeroflotIcon} alt="Air logo" width="100" height="37"/>
        <div className="card__title">
          <p className="card__title-price">{price} ₽</p>
          <p className="card__title-notification">Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <ul className="card__main">
        <li className="card__li card__li--first">
          <div className="card__airport">
            <p className="card__airport-paragraph">
              <span className="card__airport-name">{`${firstDepartureCity}, ${firstDepartureAirport}`}</span>
              <span className="card__airport-tag">({firstDepartureAirportTag})</span>
            </p>
            <span className="card__airport-arrow">&ensp;&#129042;&ensp;</span>
            <p className="card__airport-paragraph">
              <span className="card__airport-name">{`${firstArrivalCity}, ${firstArrivalAirport}`}</span>
              <span className="card__airport-tag">({firstArrivalAirportTag})</span>
            </p>
          </div>
          <div className="card__time">
            <p className="card__time-airport">
              <span className="card__time-hour">{dayjs(firstDepartureDate).format(`HH:mm`)}</span>
              <span className="card__time-date">&#8194;{dayjs(firstDepartureDate).format(`DD.MMM.ddd`)}</span>
            </p>
            <p className="card__time-duration">
              <span className="card__time-symbol">&#9719;&#8194;</span>
              <span className="card__time-interval">{displayDuration(firstTravelDuration)}</span>
            </p>
            <p className="card__time-airport">
              <span className="card__time-date">{dayjs(firstArrivalDate).format(`DD.MMM.ddd`)}</span>
              <span className="card__time-hour">&#8194;{dayjs(firstArrivalDate).format(`HH:mm`)}</span>
            </p>
            {firstTransfer ? <div className="card__time-transfer">1 пересадка</div> : null}
          </div>
          <div className="card__airlines">
            Рейс выполняет: {firstAirline}
          </div>
        </li>
        <li className="card__li">
          <div className="card__airport">
            <p className="card__airport-paragraph">
              <span className="card__airport-name">{`${secondDepartureCity}, ${secondDepartureAirport}`}</span>
              <span className="card__airport-tag">({secondDepartureAirportTag})</span>
            </p>
            <span className="card__airport-arrow">&ensp;&#129042;&ensp;</span>
            <p className="card__airport-paragraph">
              <span className="card__airport-name">{`${secondArrivalCity}, ${secondArrivalAirport}`}</span>
              <span className="card__airport-tag">({secondArrivalAirportTag})</span>
            </p>
          </div>
          <div className="card__time">
            <p className="card__time-airport">
              <span className="card__time-hour">{dayjs(secondDepartureDate).format(`HH:mm`)}</span>
              <span className="card__time-date">&#8194;{dayjs(secondDepartureDate).format(`DD.MMM.ddd`)}</span>
            </p>
            <p className="card__time-duration">
              <span className="card__time-symbol">&#9719;&#8194;</span>
              <span className="card__time-interval">{displayDuration(secondTravelDuration)}</span>
            </p>
            <p className="card__time-airport">
              <span className="card__time-date">{dayjs(secondArrivalDate).format(`DD.MMM.ddd`)}</span>
              <span className="card__time-hour">&#8194;{dayjs(secondArrivalDate).format(`HH:mm`)}</span>
            </p>
            {secondTransfer ? <div className="card__time-transfer">1 пересадка</div> : null}
          </div>
          <div className="card__airlines">
            Рейс выполняет: {secondAirline}
          </div>
        </li>
      </ul>
      <button className="card__btn">Выбрать</button>
    </li>
  );
};

Card.propTypes = {
  flight: PropTypes.shape({
    price: PropTypes.number.isRequired,
    firstTravelDuration: PropTypes.number.isRequired,
    firstAirline: PropTypes.string.isRequired,
    firstTransfer: PropTypes.number.isRequired,
    firstDepartureCity: PropTypes.string.isRequired,
    firstDepartureAirport: PropTypes.string.isRequired,
    firstDepartureAirportTag: PropTypes.string.isRequired,
    firstDepartureDate: PropTypes.string.isRequired,
    firstArrivalCity: PropTypes.string.isRequired,
    firstArrivalAirport: PropTypes.string.isRequired,
    firstArrivalAirportTag: PropTypes.string.isRequired,
    firstArrivalDate: PropTypes.string.isRequired,
    secondTravelDuration: PropTypes.number.isRequired,
    secondAirline: PropTypes.string.isRequired,
    secondTransfer: PropTypes.number.isRequired,
    secondDepartureCity: PropTypes.string.isRequired,
    secondDepartureAirport: PropTypes.string.isRequired,
    secondDepartureAirportTag: PropTypes.string.isRequired,
    secondDepartureDate: PropTypes.string.isRequired,
    secondArrivalCity: PropTypes.string.isRequired,
    secondArrivalAirport: PropTypes.string.isRequired,
    secondArrivalAirportTag: PropTypes.string.isRequired,
    secondArrivalDate: PropTypes.string.isRequired
  }).isRequired,
};


export default Card;
