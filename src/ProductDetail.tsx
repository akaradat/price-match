import { useTranslation } from 'react-i18next';

import NumericInput from './NumericInput';

function ProductDetail({
  name,
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

  let summaryHeader = t('both_items_have_the_same_price_per_quantity');
  let summaryDetail = t('other_item_in_same_quantity', {
    price:
      isNaN(otherPriceQuantityRatio) || !isFinite(otherPriceQuantityRatio)
        ? 0
        : (otherPriceQuantityRatio * size).toLocaleString(undefined, {
            maximumFractionDigits: 2,
          }),
  });
  let summaryBackgroundColor = 'bg-white';

  if (size === 0) {
    summaryHeader = t('please_enter_valid_number');
    summaryDetail = t('please_enter_valid_number');
    summaryBackgroundColor = 'bg-red-500';
  } else if (ownPriceQuantityRatio < otherPriceQuantityRatio) {
    summaryHeader = t('this_item_is_cheaper');
    summaryBackgroundColor = 'bg-lime-400';
  } else if (ownPriceQuantityRatio > otherPriceQuantityRatio) {
    summaryHeader = t('this_item_is_more_expensive');
    summaryBackgroundColor = 'bg-orange-500';
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
        <NumericInput
          value={price}
          setValue={setPrice}
          step={5}
          name={`${name}-price`}
        />

        <label className="block mb-2 font-semibold">{t('quantity')}</label>

        <div className={`flex items-center`}>
          <div
            className={`transition-all ease-in duration-100 min-w-min ${
              isAdvanced ? 'w-1/3' : 'w-full'
            }`}
          >
            <NumericInput
              value={quantity}
              setValue={setQuantity}
              step={1}
              min={1}
              name={`${name}-quantity`}
            />
          </div>
          <div
            className={`transition-all ease-in duration-100 ${
              isAdvanced ? 'w-2/3 ml-2 animate-fade-in' : 'w-0 animate-fade-out'
            }`}
          >
            <NumericInput
              value={volumn}
              setValue={setVolumn}
              step={50}
              min={1}
              name={`${name}-volumn`}
            />
          </div>
        </div>
        <div
          className={`p-4 mt-4 rounded-lg shadow-md text-center text-black ${summaryBackgroundColor}`}
        >
          <p className="text-lg font-bold">{summaryHeader}</p>
          <p>{summaryDetail}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
