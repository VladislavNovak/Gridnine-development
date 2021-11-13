import React, {useContext} from 'react';
import {ControlContext} from '../../context/control/controlContext';

const Sort = () => {
  const {getSortState, updateSort} = useContext(ControlContext);

  const sortByPrice = getSortState();

  const handleChange = ({target: {value, checked}}) => {
    const oldValue = Object.values(sortByPrice).find(item => item.checked).value;
    const payload = {
      ...sortByPrice,
      [value]: {
        ...sortByPrice[value], checked},
      [oldValue]: {
        ...sortByPrice[oldValue], checked: !checked}
    };
    updateSort(payload);
  };

  return (
    <section className="sort">
      <p className="sort__title">Сортировать</p>
      <ul>{
        Object.values(sortByPrice).map(({value, name, checked, title}) => (
          <li className="sort__li" key={value}>
            <input
              type="radio"
              id={value}
              name={name}
              value={value}
              checked={checked}
              onChange={handleChange}
              className="sort__radio" />
            <label className="sort__label" htmlFor={value}>
              - {title}
            </label>
          </li>
        ))
      }</ul>
    </section>
  );
};

export default Sort;

// handleChange:
// value - указывает на новый активный элемент
// checked - новое значение активного элемента
// oldValue - указывает на прежний активный элемент
