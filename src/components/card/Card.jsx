/* eslint-disable react/prop-types */
import React from 'react';
import AeroflotIcon from '../../assets/icons/01-afl logo russ.png';

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
    secondArrivalDate,
    } = flight;

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
              <span className="card__airport-name">{firstDepartureCity}, {firstDepartureAirport}</span>
              <span className="card__airport-tag">({firstDepartureAirportTag})</span>
            </p>
            <span className="card__airport-arrow">&ensp;&#129042;&ensp;</span>
            <p className="card__airport-paragraph">
              <span className="card__airport-name">{firstArrivalCity}, {firstArrivalAirport}</span>
              <span className="card__airport-tag">({firstArrivalAirportTag})</span>
            </p>
          </div>
          <div className="card__time">
            <p className="card__time-airport">
              <span className="card__time-hour">{firstDepartureDate}</span>
              <span className="card__time-date">&#8194;18 авг. вт</span>
            </p>
            <p className="card__time-duration">
              <span className="card__time-symbol">&#9719;</span>
              <span className="card__time-interval">&#8194;{firstTravelDuration}</span>
            </p>
            <p className="card__time-airport">
              <span className="card__time-date">18 авг. вт</span>
              <span className="card__time-hour">&#8194;{firstArrivalDate}</span>
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
              <span className="card__airport-name">{secondDepartureCity}, {secondDepartureAirport}</span>
              <span className="card__airport-tag">({secondDepartureAirportTag})</span>
            </p>
            <span className="card__airport-arrow">&ensp;&#129042;&ensp;</span>
            <p className="card__airport-paragraph">
              <span className="card__airport-name">{secondArrivalCity}, {secondArrivalAirport}</span>
              <span className="card__airport-tag">({secondArrivalAirportTag})</span>
            </p>
          </div>
          <div className="card__time">
            <p className="card__time-airport">
              <span className="card__time-hour">{secondDepartureDate}</span>
              <span className="card__time-date">&#8194;18 авг. вт</span>
            </p>
            <p className="card__time-duration">
              <span className="card__time-symbol">&#9719;</span>
              <span className="card__time-interval">&#8194;{secondTravelDuration}</span>
            </p>
            <p className="card__time-airport">
              <span className="card__time-date">18 авг. вт</span>
              <span className="card__time-hour">&#8194;{secondArrivalDate}</span>
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

export default Card;
