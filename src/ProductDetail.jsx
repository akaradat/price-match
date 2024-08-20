import { useTranslation } from 'react-i18next';

import NumericInput from './NumericInput';

function ProductDetail({
  bgColor,
  icon,
  isAdvanced,
  price,
  setPrice,
  quantity,
  setQuantity,
  volumn,
  setVolumn,
  ownPriceQuantityRatio,
  otherPriceQuantityRatio,
}) {
  const { t } = useTranslation();

  const size = isAdvanced ? quantity * volumn : quantity;

  let comparison = t('both_items_have_the_same_price_per_quantity');
  let textColor = '';
  let comparisonColor = 'bg-white';

  if (ownPriceQuantityRatio < otherPriceQuantityRatio) {
    comparison = t('this_item_is_cheaper');
    comparisonColor = 'bg-lime-400';
    textColor = 'text-black';
  } else if (ownPriceQuantityRatio > otherPriceQuantityRatio) {
    comparison = t('this_item_is_more_expensive');
    comparisonColor = 'bg-orange-500';
    textColor = 'text-black';
  }

  return (
    <div
      className={`flex-1 ${bgColor} flex flex-col justify-center items-center p-4`}
    >
      <div className="w-full max-w-md flex justify-center mb-4">
        <img src={icon} alt="Icon" className="w-12 h-12" />
      </div>
      <div className="w-full max-w-md">
        <label className="block mb-2 font-semibold">{t('price')}</label>
        <NumericInput value={price} setValue={setPrice} step={5} />

        <label className="block mb-2 font-semibold">{t('quantity')}</label>

        <div className={`flex items-center ${isAdvanced ? '' : 'hidden'}`}>
          <div className="w-1/3">
            <NumericInput value={quantity} setValue={setQuantity} step={1} />
          </div>
          <div className="w-2/3 ml-2">
            <NumericInput value={volumn} setValue={setVolumn} step={50} />
          </div>
        </div>

        <div className={`${isAdvanced ? 'hidden' : ''}`}>
          <NumericInput c value={quantity} setValue={setQuantity} step={1} />
        </div>

        <div className={`p-4 mt-4 rounded-lg shadow-md text-center ${textColor} ${comparisonColor}`}>
          <p className='text-lg font-bold'>{comparison}</p>
          <p>
            {t('other_item_in_same_quantity', { price: (otherPriceQuantityRatio * size).toFixed(2) })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
