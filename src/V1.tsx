import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ProductDetail from './ProductDetail';
import smallIcon from './assets/small.svg';
import mediumIcon from './assets/medium.svg';
import logoIcon from './assets/logo.png';

function App() {
  window.dataLayer.push({
    event: 'pageview',
    page: {
      url: location,
      title: document.title,
    },
  });

  const { t } = useTranslation();

  const [isAdvanced, setIsAdvanced] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const toggleMode = () => {
    setIsAdvanced((prevMode) => !prevMode);

    window.dataLayer.push({
      event: 'toggle_mode',
      mode: isAdvanced ? 'basic' : 'advanced',
    });
  };

  const [price1, setPrice1] = useState(0);
  const [quantity1, setQuantity1] = useState(1);
  const [volumn1, setVolumn1] = useState(100);
  const [price2, setPrice2] = useState(0);
  const [quantity2, setQuantity2] = useState(1);
  const [volumn2, setVolumn2] = useState(100);

  const size1 = isAdvanced ? quantity1 * volumn1 : quantity1;
  const size2 = isAdvanced ? quantity2 * volumn2 : quantity2;

  const ownPriceQuantityRatio1 = price1 / size1;
  const ownPriceQuantityRatio2 = price2 / size2;

  const onReset = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(100);
    }

    setPrice1(0);
    setQuantity1(1);
    setVolumn1(100);
    setPrice2(0);
    setQuantity2(1);
    setVolumn2(100);
    setIsRotating(true);

    window.dataLayer.push({
      event: 'reset_button_clicked',
    });

    setTimeout(() => {
      setIsRotating(false);
    }, 300);
  };

  return (
    <div className="min-h-dvh flex flex-col overflow-hidden">
      <header className="w-full bg-teal-500 text-white p-2 flex justify-between items-center z-30">
        <div className="flex items-center space-x-2">
          <img src={logoIcon} alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">PriceMatch เทียบราคา</h1>
        </div>
        <div className="flex space-x-4">
          <label className="inline-flex items-center cursor-pointer">
            <span className="text-sm font-medium text-white">
              {t(isAdvanced ? 'advance_mode' : 'basic_mode')}
            </span>
            <input
              className="sr-only peer"
              type="checkbox"
              checked={isAdvanced}
              onChange={toggleMode}
            />
            <div className="ms-3 relative w-11 h-6 rounded-full peer bg-gray-300 peer-checked:after:translate-x-full peer-checked:bg-gray-600 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
      </header>
      <div className="relative flex-grow flex flex-col">
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button
            className="border bg-white rounded-full shadow-md"
            onClick={onReset}
          >
            <img
              src={logoIcon}
              alt="Reset"
              className={`w-14 h-14 ${isRotating ? 'animate-spin-zoom' : ''}`}
            />
          </button>
        </div>

        <ProductDetail
          name="product1"
          bgColor="bg-gray-100"
          icon={smallIcon}
          isAdvanced={isAdvanced}
          price={price1}
          setPrice={setPrice1}
          quantity={quantity1}
          setQuantity={setQuantity1}
          volumn={volumn1}
          setVolumn={setVolumn1}
          ownPriceQuantityRatio={ownPriceQuantityRatio1}
          otherPriceQuantityRatio={ownPriceQuantityRatio2}
        />
        <ProductDetail
          name="product2"
          bgColor="bg-gray-200"
          icon={mediumIcon}
          isAdvanced={isAdvanced}
          price={price2}
          setPrice={setPrice2}
          quantity={quantity2}
          setQuantity={setQuantity2}
          volumn={volumn2}
          setVolumn={setVolumn2}
          ownPriceQuantityRatio={ownPriceQuantityRatio2}
          otherPriceQuantityRatio={ownPriceQuantityRatio1}
        />
      </div>
    </div>
  );
}

export default App;
