import React, { useRef, useCallback, useState, useEffect } from 'react'
import { Swiper, SwiperSlide, Navigation, Pagination } from '@/components/ui/slider';
import { useIsRTL } from '@/lib/locals';
import { Image } from '@/components/ui/image';
import Link from '@/components/ui/link';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import Button from '@/components/ui/button';
import { InstagramIcon } from '@/components/icons/instagram';
import { ArrowNext } from '../icons';
import { ArrowPrev } from '../icons';
import { ArrowNextIcon } from '../icons/arrow-next';
import { ArrowPrevIcon } from '../icons/arrow-prev';
// import Categories from '@/components/categories/categories';
import type { HomePageProps } from '@/types';
import SolidCardCategory from '@/components/ui/solid-card-category';
import { useCategories } from '@/framework/category';
import { useQuery } from 'react-query';
import client from '@/framework/client';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import { useProducts } from '@/framework/product';
import { Grid } from '@/components/products/grid';
import ProductCard from '@/components/products/cards/card';
import rangeMap from '@/lib/range-map';
import ProductLoader from '@/components/ui/loaders/product-loader';
import { useType } from '@/framework/type';
import { useRouter } from 'next/router';
import { HttpClient } from '@/framework/client/http-client';


const Clothings = ({ variables }: any) => {
  const { t } = useTranslation('common');
  const sliderRef = useRef<any>(null);
  const sliderRef2 = useRef<any>(null);
  const { isRTL } = useIsRTL();
  // const [couterlist,SetCounterList] = useState<any>([])
  const router = useRouter()

  const { type } = useType(variables.type);

  if (!type?.promotional_sliders) return null;

  const [slideCollection, SetslideCollection] = useState<any>([])


  const {
    products,
    isLoading,
    paginatorInfo,
    error,
    loadMore,
    isLoadingMore,
    hasMore,
  } = useProducts({
    limit: 5,
    orderBy: 'created_at',
    sortedBy: 'DESC',
    ...(variables?.cat1 && { "categories": variables?.cat1 ?? "women-dress" }),
    ...('clothing' && { type: 'clothing' }),
    ...{ 'category': variables?.cat1 ?? "women-dress" },
  });

  // console.log('skdsghdsdd',variables?.cat1 , variables?.cat2)

  const {
    products: Chic,
  } = useProducts({
    limit: 30,
    orderBy: 'created_at',
    sortedBy: 'DESC',
    ...(variables?.cat2 && { "categories": variables?.cat2 ?? "skirts" }),
    ...('clothing' && { type: 'clothing' }),
    ...{ 'category': variables?.cat2 ?? "skirts" },
  });


  // const {
  //   products: Luxe,
  // } = useProducts({
  //   limit: 30,
  //   orderBy: 'created_at',
  //   sortedBy: 'DESC',
  //   ...('clothing' && { type: 'clothing' }),
  //   ...{ "luxe" : 1},
  // });

  const varient = {
    language: "en",
    limit: 1000,
    type: "clothing",
    luxe: 1
  }

  const { categories } = useCategories(varient);

  // console.log('skdsjkddd',categories )

  const { data: counterList } = useQuery(
    [API_ENDPOINTS.COUNTERUP, 'CounterUp'],
    ({ queryKey }) => client.Counter.all()
  )

  const { data: homeLux } = useQuery(
    [API_ENDPOINTS.LUXE_S, 'luxe'],
    () => client.Counter.luxe()
  )

  useEffect(() => {
    const values = homeLux?.data.value
    const sliderData = values && JSON.parse(values)
    SetslideCollection(sliderData)
  }, [homeLux])

  const { data: Banner } = useQuery(
    [API_ENDPOINTS.FRONTPAGE, 'banners'],
    ({ queryKey }) => client.Counter.page()
  )
  const { data: instagram } = useQuery(
    [API_ENDPOINTS.INSTAGRAM, 'banners'],
    ({ queryKey }) => client.Counter.insta()
  )

  useEffect(() => {
    if (Banner?.data?.length > 0) {
      const find = Banner?.data?.find((e: { title: string; }) => e.title == 'home_bottom_banner')
      if (find) {
        // const ban = JSON.parse(find?.value)
        // SetBanners(find?.value)
      }
    }
  }, [Banner])

  const [getinstagram, setinstagram] = useState<any>([])

  // console.log("skgdskdsd",getinstagram)

  useEffect(() => {
    if (instagram?.length > 0) {
      const find = instagram?.find((e: { title: string; }) => e.title == 'instagram_posts')
      if (find) {
        let data = JSON.parse(find?.value)
        setinstagram(data)
      }
    }
  }, [instagram])




  // const { categories } = useCategories(variables?.categories);

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);


  const handlePrev2 = useCallback(() => {
    if (!sliderRef2.current) return;
    sliderRef2.current.swiper.slidePrev();
  }, []);

  const handleNext2 = useCallback(() => {
    if (!sliderRef2.current) return;
    sliderRef2.current.swiper.slideNext();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };


  const offerSliderBreakpoints = {
    320: {
      slidesPerView: 3 / 2,
      spaceBetween: 10,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1367: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  };

  const offerSliderBreakpoints2 = {
    320: {
      slidesPerView: 3 / 2,
      spaceBetween: 10,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 5 / 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,

    },
    1367: {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  };

  return (<>
    {/* {
      slideCollection?.image_data?.length > 0 &&
      // LUXE
      <section className='pb-8 pt-8'>
        <div className='bg-accent luxe_banners pt-8 pb-8 relative' style={{backgroundImage:`url(${slideCollection?.banner_image})`}}>
          <div className='absolute -bottom-20 right-0'>
            <img src='/img/follower.png' className='' />
          </div>
          <div className='container mx-auto px-4 relative'>
            <div className='flex justify-center mb-7'>
              <div className='flex justify-center p-5'>
                <h1 className='text-light text-5xl md:px-20'>{slideCollection?.banner_title ?? ''}</h1>
                <h1 className='border-l-2 md:block hidden  border-gray-400 complete2 p-2 text-light text-xl md:px-20'>{slideCollection?.banner_subtitle ?? ''}</h1>
              </div>
            </div>
            <div className=''>
              <Swiper
                className="mySwiper"
                ref={sliderRef}

                modules={[Navigation, Pagination]}  
                spaceBetween={70}

                loop={true}
                breakpoints={offerSliderBreakpoints}
                slidesPerView={4}
              >
                {
                  slideCollection?.image_data?.map((res: any, index: any) => (
                    <SwiperSlide key={index}>
                      <div className='collection_cards foot-insta relative rounded-lg '>
                        <div className="group rounded-lg   mb-3" onClick={()=> res?.url?.startsWith('https://') ? window.open(res?.url,'_blank') : res?.url && router.push(res?.url) }>
                          <Image
                            src={res?.image}
                            alt={'collection'}
                            width={300}
                            height={888}
                            className="rounded-lg img w-full object-cover  "
                          />
                          <div className='instagram-rf  backdrop-opacity-20 backdrop-invert bg-dark/30 w-fully h-fully absolute'></div>
                          <span className="mt-2 uppercase text-light absolute w-full bottom-5 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                            {res?.title}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }

                <SwiperSlide>
                <div className='collection_cards relative'>
                
                  <div className="group  mb-3">
                    <Image
                      src={'/img/Collection/2.jpg'}
                      alt={'collection'}
                      width={300}
                      height={888}
                      className="rounded-lg img w-full object-cover"
                    />
                    <span className="mt-2 text-light uppercase absolute w-full bottom-5 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                      Wedding Colelections
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              </Swiper>
              {
                slideCollection?.image_data?.length > 4 &&
                <div className="prev-arrow" onClick={handlePrev} >
                  <ArrowPrev className='text-snd' />
                </div>
              }
              {
                slideCollection?.image_data?.length > 4 &&
                <div className="next-arrow" onClick={handleNext} >
                  <ArrowNext className='text-snd' />
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    } */}

    {
      categories?.length > 0 &&
      <section className='pb-8 pt-8'>
        <div className='bg-accent luxe_banners pt-8 pb-8 relative'>
          <div className='absolute -bottom-20 right-0'>
            <img src='/img/follower.png' className='' />
          </div>
          <div className='container mx-auto px-4 relative'>
            <div className='flex justify-center mb-7'>
              <div className='flex justify-center p-5'>
                <h1 className='text-light text-5xl md:px-20'>Luxe</h1>
                <h1 className='border-l-2 md:block hidden  border-gray-400 complete2 p-2 text-light text-xl md:px-20'>Carefully curated collections from leading names in the Indian fashion industry</h1>
              </div>
            </div>
            <div className=''>
              <Swiper
                className="mySwiper"
                // ref={sliderRef}
                modules={[Navigation]}
                spaceBetween={70}
                navigation={{
                  prevEl,
                  nextEl,
                  disabledClass: 'swiper-button-disabled',
                  hiddenClass: 'swiper-button-hidden',
                }}
                // loop={true}
                breakpoints={offerSliderBreakpoints}
                slidesPerView={4}
              >
                {
                  categories?.map((res: any, index: any) => (
                    <SwiperSlide key={index}>
                      <div className='collection_cards foot-insta relative rounded-lg' onClick={() => router.push(`/${res?.type?.slug}/search/?category=${res.slug}`)}>
                        <div className="group rounded-lg   mb-3" >
                          <Image
                            src={res?.banners?.original}
                            alt={'collection'}
                            width={300}
                            height={888}
                            className="rounded-lg img w-full object-cover  "
                          />
                          <div className='instagram-rf  backdrop-opacity-20 backdrop-invert bg-dark/30 w-fully h-fully absolute'></div>
                          <span className="mt-2 uppercase text-light absolute w-full bottom-5 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                            {res?.name}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }

              </Swiper>
              {/* {
                categories?.length > 4 &&
                <div className="prev-arrow" onClick={handlePrev} >
                  <ArrowPrev className='text-snd' />
                </div>
              }
              {
                categories?.length > 4 &&
                <div className="next-arrow" onClick={handleNext} >
                  <ArrowNext className='text-snd' />
                </div>
              } */}
              <div
                ref={(node) => setPrevEl(node)}
                className="prev-arrow hover:text-accent focus:outline-none cursor-pointer"
              >
                <span className="sr-only">{t('text-previous')}</span>
                {isRTL ? <ArrowNextIcon /> : <ArrowPrevIcon />}
              </div>
              <div
                ref={(node) => setNextEl(node)}
                className="next-arrow hover:text-accent focus:outline-none cursor-pointer"
              >
                <span className="sr-only">{t('text-next')}</span>
                {isRTL ? <ArrowPrevIcon /> : <ArrowNextIcon />}
              </div>
            </div>
          </div>
        </div>
      </section>
    }

    {/* {
      products?.length > 0
    } */}
    <section className='pb-8 pt-8'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center w-full mb-6'>
          <div className='text-center '>
            <p className='uppercase'>{variables?.cat1 ?? 'Women Dress'} </p>
            <h6 className='font-bold sm:text-3xl text-2xl mb-2'>Casual and Semi-Casual </h6>
            <div className='flex justify-center w-full'><img src="/img/frame.png" className='w-32' /></div>
          </div>
        </div>
        <div className='grid  xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-3 gap-2 sami_casual hidden'>

          <div className=''>
            <article
              className={cn(
                'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
              )}
            >
              <div className=' overflow-hidden'>
                <Link href={'#'} className="cursor-pointer">
                  <Image
                    src={'/img/Collection/2.jpg'}
                    alt={"name"}
                    width={250}
                    height={888}
                    className=" rounded-lg object-cover"
                  // style={{ height: '350px' }}
                  />
                </Link>
              </div>

              {/* End of product image */}

              <div className='flex justify-between gap-3 pt-4'>
                <div className="flex shrink-0 flex-col space-y-2">
                  {/* {name && ( */}
                  <Link
                    href={'#'}
                    className="text-sm font-semibold text-heading transition-colors hover:text-green-600 md:text-base"
                    title={'name'}
                  >
                    {t('Bottle Green Suit Set With Dupa...')}
                  </Link>
                  {/* )} */}

                  {/* {author && ( */}
                  <span className="text-xs text-gray-400 md:text-sm">
                    {/* {t('text-by')} */}
                    <Link
                      href={'#'}
                      className="text-body transition-colors hover:text-green-600 ltr:ml-1 rtl:mr-1"
                    >
                      {t('Salwar, Straight Cut Salwar Suit')}
                    </Link>
                  </span>
                  {/* )} */}

                  <div className="flex shrink-0 items-center">
                    <p className="text-sm font-semibold  md:text-base">
                      ₹ 16.790.00

                      {/* <span className="text-heading"> - </span>

                {2000} */}
                    </p>
                  </div>
                </div>
                {/* {is_external ?
          <Link href={external_product_url} className='transition-all hover:text-orange-500'>
            <ExternalIcon className="h-5 w-5 stroke-2" />
          </Link>
          : null} */}
              </div>
              {/* End of product info */}
            </article>
          </div>

          <div className=''>
            <article
              className={cn(
                'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
              )}
            >
              <div className=' overflow-hidden'>
                <Link href={'#'} className="cursor-pointer">
                  <Image
                    src={'/img/Collection/3.jpg'}
                    alt={"name"}
                    width={250}
                    height={888}
                    className=" rounded-lg object-cover"
                  // style={{ height: '350px' }}
                  />
                </Link>
                <div className='card_wish'>
                  {/* {
          in_wishlist ? 
          <HeartFillIcon />
          :
        <HeartOutlineIcon />
        } */}
                  {/* <FavoriteButton
          productId={id}
          wishlist={in_wishlist} 
        /> */}
                </div>

                {/* <div className='card_tf'>
          {Number(quantity) > 0 && (
              <AddToCart variant="neon" data={product} />
            )}
          </div> */}
              </div>

              {/* End of product image */}

              <div className='flex justify-between gap-3 pt-4'>
                <div className="flex shrink-0 flex-col space-y-2">
                  {/* {name && ( */}
                  <Link
                    href={'#'}
                    className="text-sm font-semibold text-heading transition-colors hover:text-green-600 md:text-base"
                    title={'name'}
                  >
                    {t('Bottle Green Suit Set With Dupa...')}
                  </Link>
                  {/* )} */}

                  {/* {author && ( */}
                  <span className="text-xs text-gray-400 md:text-sm">
                    {/* {t('text-by')} */}
                    <Link
                      href={'#'}
                      className="text-body transition-colors hover:text-green-600 ltr:ml-1 rtl:mr-1"
                    >
                      {t('Salwar, Straight Cut Salwar Suit')}
                    </Link>
                  </span>
                  {/* )} */}

                  <div className="flex shrink-0 items-center">
                    <p className="text-sm font-semibold  md:text-base">
                      ₹ 16.790.00

                      {/* <span className="text-heading"> - </span>

                {2000} */}
                    </p>
                  </div>
                </div>
                {/* {is_external ?
          <Link href={external_product_url} className='transition-all hover:text-orange-500'>
            <ExternalIcon className="h-5 w-5 stroke-2" />
          </Link>
          : null} */}
              </div>
              {/* End of product info */}
            </article>
          </div>

          <div className=''>
            <article
              className={cn(
                'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
              )}
            >
              <div className=' overflow-hidden'>
                <Link href={'#'} className="cursor-pointer">
                  <Image
                    src={'/img/Collection/4.jpg'}
                    alt={"name"}
                    width={250}
                    height={888}
                    className=" rounded-lg object-cover"
                  // style={{ height: '350px' }}
                  />
                </Link>
                <div className='card_wish'>
                  {/* {
          in_wishlist ? 
          <HeartFillIcon />
          :
        <HeartOutlineIcon />
        } */}
                  {/* <FavoriteButton
          productId={id}
          wishlist={in_wishlist} 
        /> */}
                </div>

                {/* <div className='card_tf'>
          {Number(quantity) > 0 && (
              <AddToCart variant="neon" data={product} />
            )}
          </div> */}
              </div>

              {/* End of product image */}

              <div className='flex justify-between gap-3 pt-4'>
                <div className="flex shrink-0 flex-col space-y-2">
                  {/* {name && ( */}
                  <Link
                    href={'#'}
                    className="text-sm font-semibold text-heading transition-colors hover:text-green-600 md:text-base"
                    title={'name'}
                  >
                    {t('Bottle Green Suit Set With Dupa...')}
                  </Link>
                  {/* )} */}

                  {/* {author && ( */}
                  <span className="text-xs text-gray-400 md:text-sm">
                    {/* {t('text-by')} */}
                    <Link
                      href={'#'}
                      className="text-body transition-colors hover:text-green-600 ltr:ml-1 rtl:mr-1"
                    >
                      {t('Salwar, Straight Cut Salwar Suit')}
                    </Link>
                  </span>
                  {/* )} */}

                  <div className="flex shrink-0 items-center">
                    <p className="text-sm font-semibold  md:text-base">
                      ₹ 16.790.00

                      {/* <span className="text-heading"> - </span>

                {2000} */}
                    </p>
                  </div>
                </div>
                {/* {is_external ?
          <Link href={external_product_url} className='transition-all hover:text-orange-500'>
            <ExternalIcon className="h-5 w-5 stroke-2" />
          </Link>
          : null} */}
              </div>
              {/* End of product info */}
            </article>
          </div>

          <div className=''>
            <article
              className={cn(
                'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
              )}
            >
              <div className=' overflow-hidden'>
                <Link href={'#'} className="cursor-pointer">
                  <Image
                    src={'/img/Collection/5.jpg'}
                    alt={"name"}
                    width={250}
                    height={888}
                    className=" rounded-lg object-cover"
                  // style={{ height: '350px' }}
                  />
                </Link>
                <div className='card_wish'>
                  {/* {
          in_wishlist ? 
          <HeartFillIcon />
          :
        <HeartOutlineIcon />
        } */}
                  {/* <FavoriteButton
          productId={id}
          wishlist={in_wishlist} 
        /> */}
                </div>

                {/* <div className='card_tf'>
          {Number(quantity) > 0 && (
              <AddToCart variant="neon" data={product} />
            )}
          </div> */}
              </div>

              {/* End of product image */}

              <div className='flex justify-between gap-3 pt-4'>
                <div className="flex shrink-0 flex-col space-y-2">
                  {/* {name && ( */}
                  <Link
                    href={'#'}
                    className="text-sm font-semibold text-heading transition-colors hover:text-green-600 md:text-base"
                    title={'name'}
                  >
                    {t('Bottle Green Suit Set With Dupa...')}
                  </Link>
                  {/* )} */}

                  {/* {author && ( */}
                  <span className="text-xs text-gray-400 md:text-sm">
                    {/* {t('text-by')} */}
                    <Link
                      href={'#'}
                      className="text-body transition-colors hover:text-green-600 ltr:ml-1 rtl:mr-1"
                    >
                      {t('Salwar, Straight Cut Salwar Suit')}
                    </Link>
                  </span>
                  {/* )} */}

                  <div className="flex shrink-0 items-center">
                    <p className="text-sm font-semibold  md:text-base">
                      ₹ 16.790.00

                      {/* <span className="text-heading"> - </span>

                {2000} */}
                    </p>
                  </div>
                </div>
                {/* {is_external ?
          <Link href={external_product_url} className='transition-all hover:text-orange-500'>
            <ExternalIcon className="h-5 w-5 stroke-2" />
          </Link>
          : null} */}
              </div>
              {/* End of product info */}
            </article>
          </div>

          <div className=''>
            <article
              className={cn(
                'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
              )}
            >
              <div className=' overflow-hidden'>
                <Link href={'#'} className="cursor-pointer">
                  <Image
                    src={'/img/Collection/6.jpg'}
                    alt={"name"}
                    width={250}
                    height={888}
                    className=" rounded-lg object-cover"
                  // style={{ height: '350px' }}
                  />
                </Link>
                <div className='card_wish'>
                  {/* {
          in_wishlist ? 
          <HeartFillIcon />
          :
        <HeartOutlineIcon />
        } */}
                  {/* <FavoriteButton
          productId={id}
          wishlist={in_wishlist} 
        /> */}
                </div>

                {/* <div className='card_tf'>
          {Number(quantity) > 0 && (
              <AddToCart variant="neon" data={product} />
            )}
          </div> */}
              </div>

              {/* End of product image */}

              <div className='flex justify-between gap-3 pt-4'>
                <div className="flex shrink-0 flex-col space-y-2">
                  {/* {name && ( */}
                  <Link
                    href={'#'}
                    className="text-sm font-semibold text-heading transition-colors hover:text-green-600 md:text-base"
                    title={'name'}
                  >
                    {t('Bottle Green Suit Set With Dupa...')}
                  </Link>
                  {/* )} */}

                  {/* {author && ( */}
                  <span className="text-xs text-gray-400 md:text-sm">
                    {/* {t('text-by')} */}
                    <Link
                      href={'#'}
                      className="text-body transition-colors hover:text-green-600 ltr:ml-1 rtl:mr-1"
                    >
                      {t('Salwar, Straight Cut Salwar Suit')}
                    </Link>
                  </span>
                  {/* )} */}

                  <div className="flex shrink-0 items-center">
                    <p className="text-sm font-semibold  md:text-base">
                      ₹ 16.790.00

                      {/* <span className="text-heading"> - </span>

                {2000} */}
                    </p>
                  </div>
                </div>
                {/* {is_external ?
          <Link href={external_product_url} className='transition-all hover:text-orange-500'>
             <ExternalIcon className="h-5 w-5 stroke-2" />
          </Link>
          : null} */}
              </div>
              {/* End of product info */}
            </article>
          </div>

        </div>
        <Grid
          // TODO: Fix types
          products={products as any}
          loadMore={loadMore}
          isLoading={isLoading}
          isLoadingMore={isLoadingMore}
          hasMore={false}
          error={error}
          column="five"
        />
      </div>
    </section>

    {
      type?.promotional_sliders?.length > 0 &&
      <section className='md:pt-20 pt-8'>
        <div className='  banner2'>
          <div className='container mx-auto px-4'>
            <div className=''>
             {/* <Image
                    src={'/img/banner2.png'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  /> */}
              {
                type?.promotional_sliders?.length > 0 &&
                type?.promotional_sliders?.map((d: any, index: number) => (
                  <img src={d.original} alt={d.id} onError={(e) => e.currentTarget.src = '/img/banner2.png'} className='rounded-lg img w-full object-cover' key={index} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    }


    {
      Chic?.length > 0 &&
      <section className=' md:pt-20 pt-8'>
        {/* <div className='Chic styles'> */}
        <div className='Chic'>
          <div className='container mx-auto px-4 relative'>
            <div className='flex justify-center w-full mb-6'>
              <div className='text-center '>
                <p className='uppercase'>{variables?.cat2 ?? "skirts"}</p>
                <h6 className='font-bold sm:text-3xl text-2xl mb-2'>Chic and Stylish</h6>
                <div className='flex justify-center w-full'><img src="/img/frame.png" className='w-32' /></div>
              </div>
            </div>
            <Swiper
              className="mySwiper "
              // loop={true}
              modules={[Navigation]}
              spaceBetween={40}
              // pagination={true}
              // navigation={true}
              ref={sliderRef2}
              loop={true}
              breakpoints={offerSliderBreakpoints2}
              // resizeObserver={true}
              // allowTouchMove={false}
              slidesPerView={5}
            >

              {Chic?.length > 0 &&
                Chic?.map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard product={product} key={product.id} />
                  </SwiperSlide>
                ))}

                {/* <SwiperSlide>
              <article
                className={cn(
                  'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
                )}
              >
                <div className=' overflow-hidden'>
                  <Link href={'#'} className="cursor-pointer">
                    <Image
                      src={'/img/Collection/2.jpg'}
                      alt={"name"}
                      width={250}
                      height={888}
                      className=" rounded-lg object-cover"
                      style={{ height: '350px' }}
                    />
                  </Link>
                </div>


                <div className='flex justify-between gap-3 pt-4'>
                  <div className="flex shrink-0 flex-col space-y-2">

                    <Link
                      href={'#'}
                      className="text-sm font-semibold text-heading transition-colors hover:text-green-600 md:text-base"
                      title={'name'}
                    >
                      {t('Bottle Green Suit Set With Dupa...')}
                    </Link>
  

                    <span className="text-xs text-gray-400 md:text-sm">
                      <Link
                        href={'#'}
                        className="text-body transition-colors hover:text-green-600 ltr:ml-1 rtl:mr-1"
                      >
                        {t('Salwar, Straight Cut Salwar Suit')}
                      </Link>
                    </span>

                    <div className="flex shrink-0 items-center">
                      <p className="text-sm font-semibold  md:text-base">
                        ₹ 16.790.00
                      </p>
                    </div>
                  </div>

                </div>
              </article>
                  </SwiperSlide> */} 

            </Swiper>
            {
              products?.length > 5 &&
              <div className="prev-arrow" onClick={handlePrev2} >
                <ArrowPrev className='text-snd' />
              </div>
            }
            {
              products?.length > 5 &&
              <div className="next-arrow " onClick={handleNext2} >
                <ArrowNext className='text-snd' />
              </div>
            }
          </div>
        </div>
      </section>
    }

    {
      getinstagram?.length > 0 &&
      <section className='md:pt-20 pt-8 social_instagram'>
        <div className='Chic '>
          <div className='container mx-auto px-4'>
            <div className='flex justify-center w-full mb-6'>
              <div className='text-center '>
                <p className=''>@Vika Label</p>
                <h6 className='font-bold sm:text-3xl text-2xl uppercase mb-2'>Find us on instagram</h6>
                <div className='flex justify-center w-full'><img src="/img/frame.png" className='w-32' /></div>
              </div>
            </div>

            <div className='grid grid-cols-3 gap-2 flex items-center '>
              <div className='sm:block hidden'><img src='/img/Insta.png' className='w-full object-cover'></img></div>
              <div className='sm:col-span-2 col-span-12'>
                {/* <div className='grid grid-cols-4 gap-4'> */}
                {/* <div><img src='/img/Collection/1.jpg' className='w-full object-cover'> </img></div> */}
                <Swiper
                  className="mySwiper"
                  // {...settings}
                  navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled"
                  }}
                  modules={[Navigation, Pagination]}
                  // pagination={true}
                  spaceBetween={30}
                  // navigation={true}
                  // loop={true}
                  breakpoints={offerSliderBreakpoints}
                  // resizeObserver={true}
                  // allowTouchMove={false}
                  slidesPerView={4}
                  pagination={{
                    bulletClass:
                      'swiper-pagination-bullet !w-2.5 !h-2.5 !p-1 !rounded-full bg-gray-400 !border-0 !opacity-70 ',
                    clickableClass: 'cursor-pointer',
                    bulletActiveClass: '!bg-accent',
                    clickable: true,
                  }}
                >
                  {
                    getinstagram?.map((data: any, index: number) => (
                      <SwiperSlide key={index}>
                        <div className='foot-insta' onClick={() => window.open(data?.url, '_blank')}>
                          <Image
                            src={data?.image}
                            alt={'collection'}
                            width={300}
                            height={888}
                            className="rounded-lg img w-full object-cover InstaDD"
                            onError={(e) => e.currentTarget.src = "/img/Collection/10.jpg"}
                          />
                          <div className='backdrop-opacity-20 InstaDD backdrop-invert bg-dark/30 instagram-rf rounded-lg'>
                            {/* <img src='/img/follower.png' className='' /> */}
                            <InstagramIcon className='text-light text-2xl' />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }

                  {/* <SwiperSlide>
                  <div className='foot-insta'>
                    <Image
                      src={'/img/Collection/10.jpg'}
                      alt={'collection'}
                      width={300}
                      height={888}
                      className="rounded-lg img w-full object-cover"
                    />
                    <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf rounded-lg'>
                      <InstagramIcon className='text-light text-2xl' />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='foot-insta'>
                    <Image
                      src={'/img/Collection/11.jpg'}
                      alt={'collection'}
                      width={300}
                      height={888}
                      className="rounded-lg img w-full object-cover"
                    />
                    <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf rounded-lg'>
                      <InstagramIcon className='text-light text-2xl' />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='foot-insta'>
                    <Image
                      src={'/img/Collection/12.jpg'}
                      alt={'collection'}
                      width={300}
                      height={888}
                      className="rounded-lg img w-full object-cover"
                    />
                    <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf rounded-lg'>
                      <InstagramIcon className='text-light text-2xl' />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='foot-insta'>
                    <Image
                      src={'/img/Collection/12.jpg'}
                      alt={'collection'}
                      width={300}
                      height={888}
                      className="rounded-lg img w-full object-cover"
                    />
                    <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf rounded-lg'>
                      <InstagramIcon className='text-light text-2xl' />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='foot-insta'>
                    <Image
                      src={'/img/Collection/12.jpg'}
                      alt={'collection'}
                      width={300}
                      height={888}
                      className="rounded-lg img w-full object-cover"
                    />
                    <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf rounded-lg'>
                      <InstagramIcon className='text-light text-2xl' />
                    </div>
                  </div>
                </SwiperSlide> */}
                </Swiper>
                {/* </div> */}
                <div className=" justify-center mt-8 lg:mt-12 lg:flex hidden">
                  <Button
                    className="text-sm font-semibold h-11 btn_new uppercase md:text-base"
                    onClick={() => window.open('https://www.instagram.com/vika.label/', '_open')}
                  >
                    Find Us On instagram
                  </Button>
                </div>
              </div>
              <div className='col-start-2 col-span-4'>
                <div className="justify-center w-full mt-8 lg:mt-12 lg:hidden flex">
                  <Button
                    className="text-sm font-semibold h-11 btn_new uppercase md:text-base"
                    onClick={() => window.open('https://www.instagram.com/vika.label/', '_open')}
                  >
                    Find Us On instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    }

    <section className='md:pt-20 pt-8'>
      {
        counterList?.data.length > 0 &&
        <div className='bg-white pt-8 pb-8'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-center'>
              <div className='grid grid-cols-4 lg:gap-40 gap-35'>
                {
                  counterList?.data.slice(0, 4).map((data: any, index: React.Key | null | undefined) => {
                    const values = JSON.parse(data?.value)
                    // console.log('valuevalue',values)
                    return (
                      <div className='flex justify-center' key={index}>
                        <div className=''>
                          <div className='w-full flex justify-center'>
                            <div className='foot-ico p-5'>
                              <img src={values?.image} className='' onError={(e) => e.currentTarget.src = '/img/Icon_1.png'} />
                              {/* <img src='/img/Icon_1.png' className='' /> */}
                            </div>
                          </div>
                          <span className="mt-2  uppercase text-dark hover:text-lime-900  block md:text-base  sm:text-sm text-xs font-semibold text-heading  text-center" style={{ textAlign: 'center' }}>
                            {values?.title}
                          </span>
                        </div>
                      </div>
                    )
                  })
                }

                {/*
              <div className='flex justify-center '>
                <div className=''>
                <div className='w-full flex justify-center'>
                  <div className='foot-ico p-5'>
                    <img src='/img/Icon_4.png' className='' />
                  </div>
                  </div>
                  <span className="mt-2 uppercase text-dark hover:text-green-500 cursor-pointer block md:text-base sm:text-sm text-xs font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    Secure Payments
                  </span>
                </div>
              </div> */}

              </div>
            </div>
          </div>
        </div>
      }
    </section>

  </>)
}
export default Clothings;

