import { FilterIcon } from '@/components/icons/filter-icon';
// import MobileNavigation from '@/components/layouts/mobile-navigation';
import GeneralLayout from '@/components/layouts/_general';
import { Grid } from '@/components/products/grid';
import SearchCount from '@/components/search-view/search-count';
import SidebarFilter from '@/components/search-view/sidebar-filter';
import Sorting from '@/components/search-view/sorting';
import ErrorMessage from '@/components/ui/error-message';
import { PRODUCTS_PER_PAGE } from '@/framework/client/variables';
import { useProducts } from '@/framework/product';
import { drawerAtom } from '@/store/drawer-atom';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import StickyBox from 'react-sticky-box';
import { useSearch } from '@/components/ui/search/search.context';

import dynamic from 'next/dynamic';
import { useState,useEffect } from 'react';


const MobileNavigation = dynamic(
  () => import('@/components/layouts/mobile-navigation'),
  {
    ssr: false,
  }
);

export { getServerSideProps } from '@/framework/search.ssr';


// export default function SearchPage(props: any) {

  const SearchPage:React.FC<{getPrice:any}> = ({getPrice}) => {
  const { query } = useRouter();
  const router = useRouter()
  const { searchType, ...restQuery }: any = query;
  const [getQuery,setQuery]= useState<any>()

  const { searchTerm, updateSearchTerm } = useSearch();

  useEffect(() => {
    if(getPrice || restQuery?.text){
      if(restQuery?.text){
        if(restQuery?.category){
          let ObjQurey;
          ObjQurey = {...restQuery,price:getPrice}
          setQuery(ObjQurey) 
         }else{
            // router.push({pathname:'/clothing/search',query:{text:restQuery?.text ?? searchTerm,price:getPrice}})
            // setQuery(restQuery)
            let ObjQurey;
            ObjQurey = {...restQuery,text:restQuery?.text ?? searchTerm,price:getPrice}
           setQuery(ObjQurey)
          }
      }else{
        let ObjQurey;
        ObjQurey = {...restQuery,price:getPrice}
        setQuery(ObjQurey)
      }
    }else {
      setQuery(restQuery)
    }
  },[getPrice,restQuery?.text,restQuery?.category,restQuery?.tags,restQuery?.orderBy,restQuery?.sortedBy])

 // console.log('sjhdksdsd',getQuery)

  const {
    products,
    isLoading,
    paginatorInfo,
    error,
    loadMore,
    isLoadingMore,
    hasMore,
  } = useProducts({
    limit: 30,
    orderBy: 'created_at',
    sortedBy: 'DESC',
    ...(query?.category && { categories: query?.category }),
    ...(searchType && { type: searchType }),
    ...getQuery,
  });


  if (error) return <ErrorMessage message={error.message} />;
  return (
    <div className="w-full">
      <div className="mb-7 flex flex-col items-center justify-between md:flex-row">
        {/* //FIXME: */}
        <SearchCount
          from={paginatorInfo?.firstItem ?? 0}
          to={paginatorInfo?.lastItem ?? 0}
          total={paginatorInfo?.total ?? 0}
        />
        <div className="mt-4 max-w-xs md:mt-0">
          <Sorting variant="dropdown" />
        </div>
      </div>
      <Grid
        // TODO: Fix types
        products={products as any}
        loadMore={loadMore}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        hasMore={hasMore}
        error={error}
        column="five"
      />
    </div>
  );
}

// const GetLayout = (page: React.ReactElement) => {
  const GetLayout = () => {
  const { t } = useTranslation('common');
  const [getPrice,setPrice] = useState<any>()
  const [_, setDrawerView] = useAtom(drawerAtom);


  return (
    <GeneralLayout>
      <>
        <div className="w-full bg-light">
          {/* <div className="mx-auto flex min-h-screen w-full max-w-1920 px-5 py-10 rtl:space-x-reverse lg:space-x-10 xl:py-14 xl:px-16"> */}
          <div className="mx-auto flex min-h-screen w-full max-w-1920 px-5 py-14 rtl:space-x-reverse lg:space-x-10 xl:py-14 xl:px-16">
            <div className="hidden w-80 shrink-0 lg:block">
              <StickyBox offsetTop={140} offsetBottom={30}>
                <SidebarFilter setPrice={setPrice} getPrice={getPrice} />
              </StickyBox>
            </div>
            {/* {page} */}
            {/* {React.cloneElement(page, { getPrice })} */}
            <SearchPage getPrice={getPrice} />
          </div>
        </div>
        <MobileNavigation>
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() =>
              setDrawerView({
                display: true,
                view: 'SEARCH_FILTER',
              })
            }
            className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
          >
            <span className="sr-only">{t('text-filter')}</span>
            <FilterIcon width="17.05" height="18" />
          </motion.button>
        </MobileNavigation>
      </>
    </GeneralLayout>
  );
};

// SearchPage.getLayout = GetLayout;

export default GetLayout;