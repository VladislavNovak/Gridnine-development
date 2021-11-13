import React, {useContext, useEffect, useState} from 'react';
import {ControlContext} from '../../context/control/controlContext';
import {fetchServerData} from '../../data/fetchData';
import {DISPLAY} from '../../utils/constants';
import {Card} from '..';

const Cards = () => {
  const [data, setData] = useState([]);
  const [displayed, setDisplayed] = useState(DISPLAY);
  const {createCarrier} = useContext(ControlContext);

  const slicedData = data.slice(0, displayed);

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
