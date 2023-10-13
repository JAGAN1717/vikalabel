import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import FilterBar from './filter-bar';
import ProductGridHome from '@/components/products/grids/home';
import Clothings from '../collections/clothings';
import type { HomePageProps } from '@/types';

export default function ClassicLayout({ variables }: HomePageProps) {


  return (
    <>
      <Banner layout="classic" variables={variables.types} />
      <Categories layout="classic" variables={variables.categories} />
        <ProductGridHome
          className="px-4 pb-8 lg:p-8"
          variables={variables.products}
        />
        <Clothings />
      {/* <PromotionSliders variables={variables.types} /> */}
      {/* <FilterBar variables={variables.categories} />
      <Element
        name="grid"
        className="flex border-t border-solid border-border-200 border-opacity-70"
      >
        <Categories layout="classic" variables={variables.categories} />
        <ProductGridHome
          className="px-4 pb-8 lg:p-8"
          variables={variables.products}
        />
      </Element> */}
    </>
  );
}
