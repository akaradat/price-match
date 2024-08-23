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

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== 'Tab') {
      return;
    }

    event.preventDefault();

    const allVisibleNumberInputs = Array.from(
      document.querySelectorAll('input[type="number"]')
    ).filter((input) => {
      return !input.closest('.w-0');
    });

    const currentIndex = Array.from(allVisibleNumberInputs).indexOf(
      event.target
    );

    const nextElement = allVisibleNumberInputs[currentIndex + 1];
    if (nextElement) {
      nextElement.focus();
    }
    {
      event.target.blur();
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="number"
        value={Number(value).toString()}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        min={min}
        className="w-full min-w-12 p-2 border rounded-md"
      />
      <div className="flex items-center ml-2">
        <button
          onClick={handleIncrement}
          className="bg-white rounded-full transform active:scale-90 transition-transform"
        >
          <img src={upIcon} alt="Increment" className="w-8 h-8 max-w-none" />
        </button>
        <button
          onClick={handleDecrement}
          className="ml-2 bg-white rounded-full transform active:scale-90 transition-transform"
        >
          <img src={downIcon} alt="Decrement" className="w-8 h-8 max-w-none" />
        </button>
      </div>
    </div>
  );
}

export default NumericInput;
