import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import FilterBar from './filter-bar';
import ProductGridHome from '@/components/products/grids/home';
import Clothings from '../collections/clothings';
import type { HomePageProps } from '@/types';
import { HttpClient } from '@/framework/client/http-client';
import {useEffect,useState} from 'react'

export default function ClassicLayout({ variables }: HomePageProps) {

  // console.log('variables.products',variables)

  const [types,setTypes] = useState<any>()
  const [cusCat,setCusCat] = useState<any>(variables.types)

 useEffect(()=> {
  HttpClient.get('featureCategoryGet').then((res:any) => {
    const value = JSON.parse(res.data?.value)
    // console.log("success",value)
    setCusCat(value?.category)
  }).catch((err)=> console.log("err",err))
 },[])

//  console.log("cusCatcusCat",cusCat[1])


 
//  useEffect(()=> {
//   if(cusCat?.length){
//     const tpes = {
//       ...variables.types,
//        cat1:'kaftaans',
//        catt2: 'skirt-set'
//      }
//      setTypes(tpes)
//   }
//  },[cusCat])

 const tpes = {
  ...variables.types,
   cat1: cusCat[0] ??'kaftaans',
   cat2: cusCat[1] ?? 'skirt-set'
 }


  return (
    <>
      <Banner layout="classic" variables={variables.types} />
      <Categories layout="compact" variables={variables.categories} />
      <div className='pt-8'>
      <div className='flex justify-center w-full mb-6 '>
          <div className='text-center '>
          <p className='uppercase'>HOTTEST DISCOUNT OF THE SEASON</p>
            <h6 className='font-bold sm:text-3xl text-2xl mb-2'>With Love From Us, To You</h6>
            <div className='flex justify-center w-full'><img src="/img/frame.png" className='w-32' /></div>
          </div>
        </div>

        <ProductGridHome
          className="px-4 pb-8 lg:p-8"
          variables={variables.products}
        />
      </div>
        <Clothings  variables={tpes} layout={''}  />
      {/* <PromotionSliders variables={variables.types} /> */}
      {/* <FilterBar variables={variables.categories} /> */}
      {/* <Element
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
