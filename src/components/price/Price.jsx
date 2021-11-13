import React, {useContext} from 'react';
import {ControlContext} from '../../context/control/controlContext';
import {MAX_PRICE_LENGTH} from '../../utils/constants';

const Price = () => {
  const {getPriceRangeState, updatePriceRange} = useContext(ControlContext);

  const chooseByPriceRange = getPriceRangeState();

  const handleChange = ({target: {name, value}}) => {
    const payload = {
      ...chooseByPriceRange,
      [name]: {
        ...chooseByPriceRange[name], value},
    };
    updatePriceRange(payload);
  };

  return (
    <section className="price">
      <p className="price__title">Цена</p>
      <ul>{
        Object.values(chooseByPriceRange).map(({name, title, value}) => (
        <li className="price__li" key={name}>
          <label className="price__label" htmlFor={name}>
            {title}
          </label>
          <input
            type="tel"
            name={name}
            id={name}
            value={value}
            onChange={handleChange}
            maxLength={MAX_PRICE_LENGTH}
            className="price__tel" />
        </li>
        ))
      }</ul>
    </section>
  );
};

export default Price;
