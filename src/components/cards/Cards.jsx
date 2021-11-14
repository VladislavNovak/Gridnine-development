/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from 'react';
import {ControlContext} from '../../context/control/controlContext';
import {fetchServerData} from '../../data/fetchData';
import {DISPLAY} from '../../utils/constants';
import {Card} from '..';

const prepare = (data, {sortRule, transferRule, priceRangeRule, carrierRule}) => {
  const sortedData = [...data].sort(sortRule);
  const rangeData = priceRangeRule(sortedData);
  const transferData = transferRule(rangeData);
  return carrierRule(transferData);
};

const Cards = () => {
  const [data, setData] = useState([]);
  const [displayed, setDisplayed] = useState(DISPLAY);
  const {createCarrier, getRules} = useContext(ControlContext);

  const slicedData = prepare(data, getRules()).slice(0, displayed);

  useEffect(() => {
    if (!data.length) {
      fetchServerData().then(({flights, uniqueCarriers}) => {
        setData(flights);
        createCarrier(uniqueCarriers);
      });
    }
  }, []);

  const handleClick = () => {
    setDisplayed(displayed + DISPLAY);
  };

  return (
    <div className="cards">
      <ul className="cards__ul">{
        slicedData.map(flight => (
          <Card key={flight.id} flight={flight} />))
      }</ul>
      {data.length
        ? (<button
            className="cards__btn-more"
            onClick={handleClick}>Показать еще</button>)
        : null}
    </div>
  );
};

export default Cards;

// В fetchServerData можно передать количество запрашиваемых элементов массива.
// Если число не указано, извлекаться будут все элементы
// В контексте масштабирования это может понадобиться, например,
// чтобы ограничить размен получаемых данных
// В текущем приложении подобная возможность необходима только для разработки.
