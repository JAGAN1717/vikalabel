import cn from 'classnames';
import { Swiper, SwiperSlide, Navigation,Pagination,Autoplay } from '@/components/ui/slider';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import Search from '@/components/ui/search/search';
import type { Banner } from '@/types';
import { useHeaderSearch } from '@/layouts/headers/header-search-atom';
import { useIntersection } from 'react-use';
import { useEffect, useRef } from 'react';

interface BannerProps {
  banners: Banner[] | undefined;
  layout?: string;
}

const BannerWithSearch: React.FC<BannerProps> = ({ banners, layout }) => {
  const { showHeaderSearch, hideHeaderSearch } = useHeaderSearch();
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });


  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      hideHeaderSearch();
      return;
    }
    if (intersection && !intersection.isIntersecting) {
      showHeaderSearch();
    }
  }, [intersection]);

  return (
    // <div
    //   className={cn('textClass relative hidden lg:block', {
    //     '!block': layout === 'minimal',
    //   })}
    // >
    <div
    className={cn('textClass relative ', {
      '!block': layout === 'minimal',
    })}
  >
      <div className="-z-1   overflow-hidden">
        <div className="relative homeP">
          <Swiper
            id="banner"
            // loop={true}
            modules={[Pagination,Autoplay]}
            resizeObserver={true}
            allowTouchMove={false}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ 
              bulletClass:
               'swiper-pagination-bullet !w-2.5 !h-2.5 !p-1 !rounded-full bg-gray-400 !border-0 !opacity-70 ',
              clickableClass: 'cursor-pointer',
              bulletActiveClass: '!bg-accent',
              clickable: true,
              // renderFraction(currentClass, totalClass) {
              //   currentClass : 'mb-0'
              // },
            }}
          >
            {banners?.map((banner, idx) => (
              <SwiperSlide key={idx}>
                <div
                  // className={cn('relative h-screen  w-full  ', {
                    className={cn('relative  w-full homePBanner ', {
                    'max-h-140': layout === 'standard',
                    'max-h-[320px] md:max-h-[680px]': layout === 'minimal',
                  })}
                >
                  {/* <Image
                    className="h-full min-h-140 w-full object-cover"
                    // src={'/img/banner.jpg'}
                    src={banner.image?.original ?? productPlaceholder}
                    alt={banner.title ?? ''}
                    fill
                    sizes="(max-width: 768px) 100vw"
                  /> */}
                  {/* homePBanner */}
                  <img src={banner.image?.original ?? productPlaceholder} className='h-full   w-full object-cover '  alt={banner.title ?? ''} style={{position:'unset'}} />
                  <div
                    className={cn(
                      'absolute inset-0 mt-8 flex w-full flex-col items-center justify-center p-5 text-center md:px-20 lg:space-y-10 hidden',
                      {
                        'space-y-5 md:!space-y-8': layout === 'minimal',
                      }
                    )}
                  >
                    <h1
                      className={cn(
                        'text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl',
                        {
                          '!text-accent': layout === 'minimal',
                        }
                      )}
                    >
                      {banner?.title}
                    </h1>
                    <p className="text-sm text-heading lg:text-base xl:text-lg">
                      {banner?.description}
                    </p>
                    <div className="w-full max-w-3xl" ref={intersectionRef}>
                      <Search label="search" />
                    </div>
                  </div>  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BannerWithSearch;
