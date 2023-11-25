import BakeryCategoryLoader from '@/components/ui/loaders/bakery-categories-loader';
import NotFound from '@/components/ui/not-found';
import SectionBlock from '@/components/ui/section-block';
import SolidCardCategory from '@/components/ui/solid-card-category';
import type { Category } from '@/types';
import { Image } from '@/components/ui/image';


interface SlidingCardCategoriesProps {
  notFound: boolean;
  loading: boolean;
  categories: Category[];
}

const SlidingCardCategories: React.FC<SlidingCardCategoriesProps> = ({
  notFound,
  categories,
  loading,
}) => {
  if (loading) {
    return (
      <div className="hidden xl:block">
        <div className="mt-8 flex h-52 w-full justify-center px-2">
          <BakeryCategoryLoader />
        </div>
      </div>
    );
  }
  return (
    // <SectionBlock title="text-which-book">
    <div className=''>
      {/* <SectionBlock className='pt-8'> */}
      {
      categories?.length > 0 &&
      <section className='md:pt-20 pt-8'>
        <div className='container mx-auto '>
        <div className='flex justify-center w-full mb-6'>
          <div className='text-center '>
            <h6 className='font-bold sm:text-3xl text-2xl mb-2'>Shop By Type</h6>
            <div className='flex justify-center w-full'><img src="/img/frame.png" className='w-32' /></div>
          </div>
        </div>
        <div className='bg-gray-100 p-6'>
          {!notFound ? (
            <SolidCardCategory items={categories} className="py-8" />
          ) : (
            <div className="min-h-full">
              <NotFound text="text-no-category" className="h-96" />
            </div>
          )}
        </div>
        </div>
      </section>
      }
      {/* </SectionBlock> */}
      
      <section className='md:pt-20 pt-8 mb-8 hidden'>
        <div className='container w-full px-4 mx-auto'>
        <div className='flex justify-center w-full mb-6'>
          <div className='text-center '>
            <h6 className='font-bold sm:text-3xl text-2xl mb-2'>Shop By Collection</h6>
            <div className='flex justify-center w-full'><img src="/img/frame.png" className='w-32' /></div>
          </div>
        </div>

        <div className='grid gap-x-8 gap-y-4 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
          <div className="group relative flex justify-center cursor-pointer overflow-hidden mb-3">
            {/* <Link href={`#`}> */}
            <div className="">
            <Image
              src={'/img/Collection/1.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Kurtis
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/2.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Salwar kameez
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/3.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Bridal Lehenga
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/4.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Western Gowns
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/5.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Ready pleated Saree
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/6.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              kaftaans
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/7.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Breezy Summer
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/8.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Vika Label Kids
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/9.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Jaipur Tales
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/10.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Ethnic Era
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/11.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Madras Rhapsody
            </span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden mb-3 flex justify-center">
            <div className="">

            {/* <Link href={`#`}> */}
            <Image
              src={'/img/Collection/12.jpg'}
              alt={'collection'}
              width={200}
              height={240}
              className="rounded-full object-cover transition duration-700 ease-in-out scale-95 transform motion-safe:hover:scale-100"
            />
            {/* </Link> */}
            {/* <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-orange-500 ltr:text-left rtl:text-right"> */}
            <span className="mt-2 block text-base font-semibold text-heading transition-colors group-hover:text-green-500 text-center" style={{ textAlign: 'center' }}>
              Uptown Contemporary
            </span>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default SlidingCardCategories;
