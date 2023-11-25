import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from 'next-auth/react';
import '@/assets/css/main.css';
import '@/assets/css/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import { ModalProvider } from '@/components/ui/modal/modal.context';
import ManagedModal from '@/components/ui/modal/managed-modal';
import ManagedDrawer from '@/components/ui/drawer/managed-drawer';
import DefaultSeo from '@/components/seo/default-seo';
import { SearchProvider } from '@/components/ui/search/search.context';
import PrivateRoute from '@/lib/private-route';
import { CartProvider } from '@/store/quick-cart/cart.context';
import SocialLogin from '@/components/auth/social-login';
import { NextPageWithLayout } from '@/types';
import QueryProvider from '@/framework/client/query-provider';
import { getDirection } from '@/lib/constants';
import Router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import nProgress from 'nprogress'
import ErrorMessage from '@/components/ui/error-message';
import PageLoader from '@/components/ui/loaders/page-loader';
import { useSettings } from '@/framework/settings';

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

const ToastContainer = dynamic(
  () => import('react-toastify').then((module) => module.ToastContainer),
  { ssr: false }
);


// const AppSettings: React.FC<{ children?: React.ReactNode }> = (props) => {
//   const { query, locale } = useRouter();
//   const { settings, isLoading, error } = useSettings();
//   if (isLoading) return <PageLoader />;
//   if (error) return <ErrorMessage message={error.message} />;
//   // TODO: fix it
//   // @ts-ignore
//   return <SettingsProvider initialValue={settings?.options} {...props} />;
// };

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({
  Component,
  pageProps: {
    //@ts-ignore
    session,
    ...pageProps
  },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const authenticationRequired = Component.authenticationRequired ?? false;
  const { locale } = useRouter();
  const dir = getDirection(locale);

 

  if (typeof window === "undefined") {
    return null;
  }
  
  const [rangePrice,setRangePrcie] = useState<any>()

  window.onscroll = function() {scrollFunction()};
  
  let mybutton = document.getElementById("myBtnsdsdd");

  
  function scrollFunction() {
    if(mybutton){
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // mybutton.style.display = "block"
        mybutton.classList.add('block')
        mybutton.classList.remove('hidden')
      } else {
        // mybutton.style.display = "none";
        mybutton.classList.remove('block')
        mybutton.classList.add('hidden')
      }
    }
 }

  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}



  return (
    <>
      <div dir={dir}>
        <SessionProvider session={session}>
          <QueryProvider pageProps={pageProps}>
            <SearchProvider>
              <ModalProvider>
                <CartProvider>
                  <>
                    <DefaultSeo />
                    {authenticationRequired ? (
                      <PrivateRoute>
                        {getLayout(<Component {...pageProps} />)}
                      </PrivateRoute>
                    ) : (
                       getLayout(<Component {...pageProps} />)
                    )}
                    <ManagedModal />
                    <ManagedDrawer />
                    <ToastContainer autoClose={2000} theme="colored" />
                    <SocialLogin />
                  </>
                </CartProvider>
              </ModalProvider>
            </SearchProvider>
          </QueryProvider>
        </SessionProvider>
            {/* <button onClick={()=>topFunction()} id="myBtnsdsdd" className='fixed bg-accent hidden rounded-full top_arrow h-12 p-5 w-12'  title="Go to top"> */}
            <button  className='fixed   rounded-full top_arrow h-12 w-12 wat-icon'  title="Go to top">
            {/* <i className="fa fa-angle-double-up text-light" aria-hidden="true"></i> */}
             {/* <img src='/img/Up-arrow-white.png' className='' /> */}
             <img src='/img/Instagram.jpg' className='rounded-full' />
            </button>
      </div>
    </>
  );
}

export default appWithTranslation(CustomApp);