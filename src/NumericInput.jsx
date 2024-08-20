import React from 'react';
import upIcon from './assets/up.svg';
import downIcon from './assets/down.svg';

function NumericInput({ name, value, setValue, min = 0, step = 1 }) {
  const handleIncrement = () => {
    setValue(value + step);

    window.dataLayer.push({
      event: 'increment_button_clicked',
      name,
    });
  };

  const handleDecrement = () => {
    setValue(Math.max(min, value - step));

    window.dataLayer.push({
      event: 'decrement_button_clicked',
      name,
    });
  };

  const handleChange = (e) => {
    setValue(+e.target.value);

    window.dataLayer.push({
      event: 'manual_input',
      name,
    });
  };

  return (
    <div className="flex items-center">
      <input
        type="number"
        value={Number(value).toString()}
        onChange={handleChange}
        min={min}
        className="w-full p-2 border rounded-md"
      />
      <div className="flex items-center ml-2">
        <button onClick={handleIncrement}>
          <img src={upIcon} alt="Increment" className="w-8 h-8 max-w-none" />
        </button>
        <button onClick={handleDecrement} className="ml-2">
          <img src={downIcon} alt="Decrement" className="w-8 h-8 max-w-none" />
        </button>
      </div>
    </div>
  );
}

export default NumericInput;
