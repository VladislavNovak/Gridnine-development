import React, {useContext, useEffect, useState} from 'react';
import {ControlContext} from '../../context/control/controlContext';
import {fetchServerData} from '../../data/fetchData';
import {QUANTITY_TO_SHOW} from '../../utils/constants';
import {Card} from '..';

const Cards = () => {
  const [displayed, setDisplayed] = useState(QUANTITY_TO_SHOW);
  const {getProcessedData, createDataFlights} = useContext(ControlContext);

  console.log(`сработало`);

  const slicedData = getProcessedData(displayed);

  useEffect(() => {
    fetchServerData().then((flights) => {
      createDataFlights(flights);
    });
  }, []);

  const handleClick = () => {
    setDisplayed(prevCountShownItems => prevCountShownItems + QUANTITY_TO_SHOW);
  };

  return (
    <div className="cards">
      <ul className="cards__ul">{
        slicedData.map(flight => (
          <Card key={flight.id} flight={flight} />))
      }</ul>{
        slicedData.length
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
