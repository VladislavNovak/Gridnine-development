import React, {useContext} from 'react';
import {ControlContext} from '../../context/control/controlContext';
import {MAX_TITLE_LENGTH} from '../../utils/constants';
import {slicedTitle} from '../../utils/function';

const Carrier = () => {
  const {getCarrierState, updateCarrier} = useContext(ControlContext);

  const chooseByCarrier = getCarrierState();

  const handleChange = ({target: {name, checked}}) => {
    const payload = [...chooseByCarrier.map(item => item.name === name ? {...item, checked} : item)];
    updateCarrier(payload);
  };

  return (
    <section className="carrier">
      <p className="carrier__title">Авиакомпании</p>
      <ul>{
        chooseByCarrier.map(({name, checked, minPrice}) => (
          <li className="carrier__li" key={name}>
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={checked}
              onChange={handleChange}
              className="carrier__checkbox" />
            <label className="carrier__label" htmlFor={name}>
              - {`${slicedTitle(name, MAX_TITLE_LENGTH)} от ${minPrice} р.`}
            </label>
          </li>
        ))
      }</ul>
    </section>
  );
};

export default Carrier;
