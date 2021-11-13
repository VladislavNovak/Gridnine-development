import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Carrier, Price, Sort, Transfer} from '../../components';
import {ControlContext} from '../../context/control/controlContext';
import {fetchServerData} from '../../data/fetchData';

const Home = () => {
  const [data, setData] = useState(null);
  const {createCarrier} = useContext(ControlContext);

  console.log(`datax: `, data);

  useEffect(() => {
    fetchServerData().then(({flights, uniqueCarriers}) => {
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
      <main></main>
    </Fragment>
  );
};

export default Home;
