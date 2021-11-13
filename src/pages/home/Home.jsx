import React, {Fragment} from 'react';
import {Carrier, Price, Sort, Transfer, Cards} from '../../components';

const Home = () => {
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
