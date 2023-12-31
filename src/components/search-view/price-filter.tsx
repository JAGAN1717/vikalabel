import Slider from '@/components/ui/forms/range-slider';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const defaultPriceRange = [0, 100000];
const PriceFilter:React.FC<{minsetPrice?:(() => {} | undefined) | any; priceVal:any}> = ({minsetPrice,priceVal}) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const selectedValues = useMemo(
    () =>
      router.query.price
        ? (router.query.price as string).split(',')
        : defaultPriceRange,
    [router.query.price]
  );

  const [state, setState] = useState<number[] | string[]>(selectedValues);

  useEffect(() => {
    setState(selectedValues);
  }, [selectedValues]);

  useEffect(()=> {
    if(!priceVal){
      setState(selectedValues);
    }
  },[priceVal])


  function handleChange(value: number[]) {
    setState(value);
    // router.push({
    //   pathname: router.pathname,
    //   // pathname: 'https://vl.vrikshatech.in/api/public',
    //   query: {
    //     ...router.query,
    //     price: value.join(','),
    //   },
    // });
    minsetPrice(value.join(','))
  } 


  return (
    <>
      <span className="sr-only">{t('text-sort-by-price')}</span>
      <Slider
        allowCross={false}
        range
        min={0}
        max={100000}
        //@ts-ignore
        defaultValue={state}
        //@ts-ignore
        value={state}
        onChange={(value: any) => handleChange(value)}
      />
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="flex flex-col items-start p-2 bg-gray-100 border border-gray-200 rounded">
          <label className="text-sm font-semibold text-gray-400">Min</label>
          <span className="text-sm font-bold text-heading">{state[0]}</span>
        </div>
        <div className="flex flex-col p-2 bg-gray-100 border border-gray-200 rounded">
          <label className="text-sm font-semibold text-gray-400">Max</label>
          <span className="text-sm font-bold text-heading">{state[1]}</span>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
