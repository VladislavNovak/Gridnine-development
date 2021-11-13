import React, {Fragment, useContext, useEffect, useState} from 'react';
import {ControlContext} from '../../context/control/controlContext';
import {fetchServerData} from '../../data/fetchData';
import {Carrier, Price, Sort, Transfer, Cards} from '../../components';

const Home = () => {
  const [data, setData] = useState(null);
  const {createCarrier} = useContext(ControlContext);

  console.log(`datax: `, data);

  useEffect(() => {
    fetchServerData(2).then(({flights, uniqueCarriers}) => {
      setData(flights);
      createCarrier(uniqueCarriers);
    });
  }, []);

  return (
    <Fragment>
      <aside>
        <form action="">
          <Sort />
          <Transfer />
          <Price />
          <Carrier />
        </form>
      </aside>
      <main>
        <Cards />
      </main>
    </Fragment>
  );
};

export default Home;

// В fetchServerData можно передать количество запрашиваемых элементов массива.
// Если число не указано, извлекаться будут все элементы
// В контексте масштабирования это может понадобиться, например,
// чтобы ограничить размен получаемых данных
// В текущем приложении подобная возможность необходима только для разработки.
