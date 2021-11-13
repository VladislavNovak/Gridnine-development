import React, {useContext, useEffect, useState} from 'react';
import {ControlContext} from '../../context/control/controlContext';
import {fetchServerData} from '../../data/fetchData';
import {Card} from '..';

const Cards = () => {
  const [data, setData] = useState([]);
  const {createCarrier} = useContext(ControlContext);

  console.log(`datax: `, data);

  useEffect(() => {
    if (!data.length) {
      fetchServerData(2).then(({flights, uniqueCarriers}) => {
        setData(flights);
        createCarrier(uniqueCarriers);
      });
    }
  }, []);

  return (
    <div className="cards">
      <ul className="cards__ul">{
        data.map(flight => (
          <Card key={flight.id} flight={flight} />
        ))
      }</ul>
      <button className="cards__btn-more">Показать еще</button>
    </div>
  );
};

export default Cards;

// В fetchServerData можно передать количество запрашиваемых элементов массива.
// Если число не указано, извлекаться будут все элементы
// В контексте масштабирования это может понадобиться, например,
// чтобы ограничить размен получаемых данных
// В текущем приложении подобная возможность необходима только для разработки.
