import React, {useContext} from 'react';
import {ControlContext} from '../../context/control/controlContext';
import {MAX_PRICE_LENGTH} from '../../utils/constants';

const Price = () => {
  const {getPriceRangeState, updatePriceRange} = useContext(ControlContext);

  const filterByPriceRange = getPriceRangeState();

  const handleChange = ({target: {name, value}}) => {
    const payload = {
      ...filterByPriceRange,
      [name]: {
        ...filterByPriceRange[name], value},
    };
    updatePriceRange(payload);
  };

  return (
    <section className="price">
      <p className="price__title">Цена</p>
      <ul>{
        Object.values(filterByPriceRange).map(({name, title, value}) => (
        <li className="price__li price__li--first" key={name}>
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
