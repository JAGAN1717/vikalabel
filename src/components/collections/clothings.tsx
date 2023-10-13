import React from 'react'
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { Image } from '@/components/ui/image';
import Link from '@/components/ui/link';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import Button from '@/components/ui/button';
import { InstagramIcon } from '@/components/icons/instagram';




const Clothings = () => {
  const { t } = useTranslation('common');

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
    slidesPerView: 3/2,
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
    slidesPerView: 3/2,
    spaceBetween: 10,
  },
  580: {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
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
    <section className='pb-8 pt-8'>
      <div className='bg-accent luxe_banners pt-8 pb-8 relative '> 
      <div className='absolute -bottom-20 right-0'>
        <img src='/img/follower.png' className='' />
      </div>
        <div className='container mx-auto px-4'>
          <div className='flex justify-center mb-7'>
            <div className='flex justify-center p-5'>
              <h1 className='text-light text-5xl md:px-20'>LUXE</h1>
              <h1 className='border-l-2 md:block hidden  border-gray-400 complete2 p-2 text-light text-xl md:px-20'>Carefully curated collections from leading names in the Indian fashion industry</h1>
            </div>
          </div>
          <Swiper
            className="mySwiper"
            // {...settings}
            // loop={true}
            modules={[Navigation]}
            spaceBetween={55}
            navigation={true}
            loop={true}
            breakpoints={offerSliderBreakpoints}
            // resizeObserver={true}
            // allowTouchMove={false}
            slidesPerView={4} 
            
          >
            <SwiperSlide>
              <div className='collection_cards relative'>
                {/* <div className="group relative cursor-pointer overflow-hidden mb-3"> */}
                <div className="group  mb-3">
                  <Image
                    src={'/img/Collection/1.jpg'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  />
                  <span className="mt-2 uppercase text-light absolute w-full bottom-3 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    kids Wear Colelections
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='collection_cards relative'>
                {/* <div className="group relative cursor-pointer overflow-hidden mb-3"> */}
                <div className="group  mb-3">
                  <Image
                    src={'/img/Collection/2.jpg'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  />
                  <span className="mt-2 text-light uppercase absolute w-full bottom-3 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    Wedding Colelections
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='collection_cards relative'>
                {/* <div className="group relative cursor-pointer overflow-hidden mb-3"> */}
                <div className="group  mb-3">
                  <Image
                    src={'/img/Collection/3.jpg'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  />
                  <span className="mt-2 text-light uppercase absolute w-full bottom-3 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    Luxe Colelections
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='collection_cards relative'>
                {/* <div className="group relative cursor-pointer overflow-hidden mb-3"> */}
                <div className="group  mb-3">
                  <Image
                    src={'/img/Collection/4.jpg'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  />
                  <span className="mt-2 text-light uppercase absolute w-full bottom-3 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    winter Colelections
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='collection_cards relative'>
                {/* <div className="group relative cursor-pointer overflow-hidden mb-3"> */}
                <div className="group  mb-3">
                  <Image
                    src={'/img/Collection/5.jpg'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  />
                  <span className="mt-2 text-light uppercase absolute w-full bottom-3 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    kids Wear Colelections
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='collection_cards relative'>
                {/* <div className="group relative cursor-pointer overflow-hidden mb-3"> */}
                <div className="group  mb-3">
                  <Image
                    src={'/img/Collection/5.jpg'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  />
                  <span className="mt-2 text-light uppercase absolute w-full bottom-3 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    kids Wear Colelections
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='collection_cards relative'>
                {/* <div className="group relative cursor-pointer overflow-hidden mb-3"> */}
                <div className="group  mb-3">
                  <Image
                    src={'/img/Collection/5.jpg'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  />
                  <span className="mt-2 text-light uppercase absolute w-full bottom-3 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    kids Wear Colelections
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='collection_cards relative'>
                {/* <div className="group relative cursor-pointer overflow-hidden mb-3"> */}
                <div className="group  mb-3">
                  <Image
                    src={'/img/Collection/5.jpg'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  />
                  <span className="mt-2 text-light uppercase absolute w-full bottom-3 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    kids Wear Colelections
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

    <section className='pb-8 pt-8'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center w-full mb-6'>
          <div className='text-center '>
            <p className='uppercase'>Kurti</p>
            <h6 className='font-bold sm:text-3xl text-2xl mb-2'>Casual and Semi-Casual </h6>
            <div className='flex justify-center w-full'><img src="/img/frame.png" className='w-32' /></div>
          </div>
        </div>
        <div className='grid  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-3 gap-2 sami_casual'>

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
      </div>
    </section>

    <section className='pb-8 pt-8'>
      <div className=' pb-8 pt-8 banner2'>
        <div className='container mx-auto px-4'>
          <div className=''>
                  {/* <Image
                    src={'/img/banner2.png'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  /> */}

                  <img src='/img/banner2.png' className='rounded-lg img w-full object-cover'  />
                </div>
        </div>
      </div>
    </section>

    <section className='pb-8 pt-8'>
      <div className=' pb-8 pt-8'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-center w-full mb-6'>
            <div className='text-center '>
              <p className='uppercase'>Indo Western</p>
              <h6 className='font-bold sm:text-3xl text-2xl mb-2'>Chic and Stylish</h6>
              <div className='flex justify-center w-full'><img src="/img/frame.png" className='w-32' /></div>
            </div>
          </div>

          <Swiper
            className="mySwiper"
            // loop={true}
            modules={[Navigation]}
            spaceBetween={40}
            navigation={true}
            loop={true}
            breakpoints={offerSliderBreakpoints2}
            // resizeObserver={true}
            // allowTouchMove={false}
            slidesPerView={5}
          >
            <SwiperSlide>
              <article
                className={cn(
                  'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
                )}
              >
                <div className=' overflow-hidden'>
                  <Link href={'#'} className="cursor-pointer">
                    <Image
                      src={'/img/Collection/7.jpg'}
                      alt={"name"}
                      width={250}
                      height={888}
                      className=" rounded-lg object-cover"
                      style={{ height: '350px' }}
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
            </SwiperSlide>

            <SwiperSlide>
              <article
                className={cn(
                  'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
                )}
              >
                <div className=' overflow-hidden'>
                  <Link href={'#'} className="cursor-pointer">
                    <Image
                      src={'/img/Collection/8.jpg'}
                      alt={"name"}
                      width={250}
                      height={888}
                      className=" rounded-lg object-cover"
                      style={{ height: '350px' }}
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
            </SwiperSlide>

            <SwiperSlide>
              <article
                className={cn(
                  'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
                )}
              >
                <div className=' overflow-hidden'>
                  <Link href={'#'} className="cursor-pointer">
                    <Image
                      src={'/img/Collection/9.jpg'}
                      alt={"name"}
                      width={250}
                      height={888}
                      className=" rounded-lg object-cover"
                      style={{ height: '350px' }}
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
            </SwiperSlide>

            <SwiperSlide>
              <article
                className={cn(
                  'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
                )}
              >
                <div className=' overflow-hidden'>
                  <Link href={'#'} className="cursor-pointer">
                    <Image
                      src={'/img/Collection/10.jpg'}
                      alt={"name"}
                      width={250}
                      height={888}
                      className=" rounded-lg object-cover"
                      style={{ height: '350px' }}
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
            </SwiperSlide>

            <SwiperSlide>
              <article
                className={cn(
                  'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200'
                )}
              >
                <div className=' overflow-hidden'>
                  <Link href={'#'} className="cursor-pointer">
                    <Image
                      src={'/img/Collection/11.jpg'}
                      alt={"name"}
                      width={250}
                      height={888}
                      className=" rounded-lg object-cover"
                      style={{ height: '350px' }}
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>

    <section className='pb-8 pt-8 social_instagram'>
      <div className=' pb-8 pt-8'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-center w-full mb-6'>
            <div className='text-center '>
              <p className=''>@Vika Label</p>
              <h6 className='font-bold sm:text-3xl text-2xl uppercase mb-2'>Find us on instagram</h6>
              <div className='flex justify-center w-full'><img src="/img/frame.png" className='w-32' /></div>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-2 items-center'>
            <div className=''><img src='/img/Insta.png' className='w-full object-cover'></img></div>
             <div className='col-span-2'>
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
            modules={[Navigation]}
            spaceBetween={30}
            // navigation={true}
            // loop={true}
            breakpoints={offerSliderBreakpoints}
            // resizeObserver={true}
            // allowTouchMove={false}
            slidesPerView={4} 
          >
             <SwiperSlide>
             <div className='foot-insta'>
                  <Image
                    src={'/img/Collection/9.jpg'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  />
                  <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf'>
                    {/* <img src='/img/follower.png' className='' /> */}
                   <InstagramIcon className='text-light text-2xl' />
                  </div>
                </div>  
             </SwiperSlide>
             <SwiperSlide>
             <div className='foot-insta'>
                  <Image
                    src={'/img/Collection/10.jpg'}
                    alt={'collection'}
                    width={300}
                    height={888}
                    className="rounded-lg img w-full object-cover"
                  />
                  <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf'>
                    {/* <img src='/img/follower.png' className='' /> */}
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
                   <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf'>
                    {/* <img src='/img/follower.png' className='' /> */}
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
                   <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf'>
                    {/* <img src='/img/follower.png' className='' /> */}
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
                   <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf'>
                    {/* <img src='/img/follower.png' className='' /> */}
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
                   <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf'>
                    {/* <img src='/img/follower.png' className='' /> */}
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
                   <div className='backdrop-opacity-20 backdrop-invert bg-dark/30 instagram-rf'>
                    {/* <img src='/img/follower.png' className='' /> */}
                    <InstagramIcon className='text-light text-2xl' />
                  </div>
                </div>  
             </SwiperSlide>
          </Swiper>

              {/* </div> */}
              <div className="flex justify-center mt-8 lg:mt-12">
                <Button
                  className="text-sm font-semibold h-11 btn_new uppercase md:text-base"
                >
                  Follow Us On instagram 
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className=''>
      <div className='bg-white pb-8 pt-8'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-center'>
            <div className='grid grid-cols-4 lg:gap-40 gap-35'>
              <div className='flex justify-center'>
                <div className=''>
                  <div className='w-full flex justify-center'>
                    <div className='foot-ico p-5'>
                      <img src='/img/Icon_1.png' className='' />
                    </div>
                  </div>
                  <span className="mt-2 uppercase text-dark hover:text-green-500 cursor-pointer block md:text-base  sm:text-sm text-xs font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    Best Quality Gauarenteed
                  </span>
                </div>
              </div>

              <div className='flex justify-center '>
                <div className=''>
                <div className='w-full flex justify-center'>
                  <div className='foot-ico p-5'>
                    <img src='/img/Icon_2.png' className='' />
                  </div>
                  </div>
                  <span className="mt-2 uppercase hover:text-green-500 cursor-pointer text-dark  block md:text-base sm:text-sm text-xs font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    Free Shipping
                  </span>
                </div>
              </div>

              <div className='flex justify-center '>
                <div className=''>
                <div className='w-full flex justify-center'>
                  <div className='foot-ico p-5'>
                    <img src='/img/Icon_3.png' className='' />
                  </div>
                  </div>
                  <span className="mt-2 uppercase text-dark hover:text-green-500 cursor-pointer block md:text-base sm:text-sm text-xs font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
                    Best Price Promise
                  </span>
                </div>
              </div>

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
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  </>)
}
export default Clothings;