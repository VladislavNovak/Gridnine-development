import React, {useContext} from 'react';
import {ControlContext} from '../../context/control/controlContext';

const Transfer = () => {
  const {getTransferState, updateTransfer} = useContext(ControlContext);

  const chooseByTransfer = getTransferState();

  const handleChange = ({target: {name, checked}}) => {
    const payload = {
      ...chooseByTransfer,
      [name]: {
        ...chooseByTransfer[name], checked},
    };
    updateTransfer(payload);
  };

  return (
    <section className="transfer">
      <p className="transfer__title">Фильтровать</p>
      <ul>{
        Object.values(chooseByTransfer).map(({name, checked, title}) => (
          <li className="transfer__li" key={name}>
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={checked}
              onChange={handleChange}
              className="transfer__checkbox" />
            <label className="transfer__label" htmlFor={name}>
              - {title}
            </label>
          </li>
        ))
      }</ul>
    </section>
  );
};

export default Transfer;

// handleChange:
// value - указывает на активный элемент
// checked - новое значение активного элемента
