import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import DrawerWrapper from '@/components/ui/drawer/drawer-wrapper';
import { useAtom } from 'jotai';
import { drawerAtom } from '@/store/drawer-atom';
import { useCategories } from '@/framework/category';
// import Categories from '@/components/categories/categories';
import { isMobile, isMobileOnly} from 'react-device-detect';
import Scrollbar from '@/components/ui/scrollbar';
import NotFound from '@/components/ui/not-found';
import TreeMenu from '@/components/ui/tree-menu2';
import React, { useState, useEffect } from 'react';



const headerLinks = [
  // { href: Routes.shops, label: 'nav-menu-shops' },
  // { href: Routes.manufacturers, label: 'text-manufacturers' },
  // { href: Routes.authors, label: 'text-authors' },
  { href: Routes.coupons, label: 'nav-menu-offer' },
  { href: Routes.help, label: 'nav-menu-faq' },
  { href: Routes.contactUs, label: 'nav-menu-contact' },
];

export default function MobileMainMenu() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [_, closeSidebar] = useAtom(drawerAtom);

    const [_isMobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  const varient = {
    language: "en",
    limit: 1000,
    type: "clothing"
  }                   

 

  const { categories, isLoading, error } = useCategories(varient);

  function handleClick(path: string) {
    router.push(path);
    closeSidebar({ display: false, view: '' });
  } 

  return (
    <DrawerWrapper>
      {/* <ul className="grow">
        {headerLinks.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <button
              onClick={() => handleClick(href)}
              className="flex cursor-pointer items-center py-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
            >
              {t(label)}
            </button>
          </li>
        ))} 
        {
           categories?.slice(0,6).map((data : any,index : any) => (

            <li key={`/${data?.type?.slug}/search/?category=${data.slug}`}>
            <button
              onClick={() => handleClick(`/${data?.type?.slug}/search/?category=${data.slug}`)}
              className="flex cursor-pointer items-center py-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
            >
              {t(data?.name)}
            </button>
          </li>
           ))
         }
      </ul> */}

<aside
      className={` h-full bg-light lg:sticky mt-7 lg:top-22 md:block xl:w-72`}
    >
      {!isMobile && (
        // <div className="max-h-full  grow overflow-hidden side_cartgoryBar">
        <div className="max-h-full  grow overflow-hidden ">
          <Scrollbar
            className="max-h-screen w-full"
            // style={{ height: 'calc(70vh - 5.35rem)' }}
          >
            {!!Boolean(categories.length) ? (
              // <div className="px-5">
              <div className="">
                {/* <TreeMenu items={categories} className="xl:py-8 " /> */}
                <TreeMenu items={categories} className="" />
              </div>
            ) : (
              <div className="min-h-full w-full px-9 pt-6 pb-8 lg:p-8">
                <NotFound text="text-no-category" className="h-96" />
              </div>
            )}
          </Scrollbar>
        </div>
      )}

      {isMobile && (
        <div className="max-h-full grow overflow-hidden">
          {!!Boolean(categories.length) ? (
            <div className="px-5">
              <TreeMenu items={categories} className="xl:py-8" />
            </div>
          ) : (
            <div className="min-h-full w-full px-9 pt-6 pb-8 lg:p-8">
              <NotFound text="text-no-category" className="h-96" />
            </div>
          )}
        </div>
      )}
    </aside>

    </DrawerWrapper>
  );
}
