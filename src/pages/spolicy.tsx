import { termsAndServices } from '@/framework/static/terms';
import { Link, Element } from 'react-scroll';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import client from '@/framework/client';
import { useState, useEffect } from 'react'
import NotFound from '@/components/ui/not-found';
import PageLoader from '@/components/ui/loaders/page-loader';


function makeTitleToDOMId(title: string) {
  return title.toLowerCase().split(' ').join('_');
}




export default function ShippingpolicyPage() {
  const { t } = useTranslation('terms');
  const { title, date, content } = termsAndServices;

  const [shipping, setshipping] = useState<any>()

  const { data, isLoading } = useQuery(
    [API_ENDPOINTS.FRONTPAGE, 'terms'],
    ({ queryKey }) => client.Counter.page()
  )




  useEffect(() => {
    const find = data?.data?.find((e: { title: string; }) => e.title == "shipping_policy")
    if (find) {
      setshipping(JSON.parse(find?.value))
    }
  }, [data])






  return (
    <>
      <Seo title="Terms" url="terms" />
      {
        isLoading ?
          <PageLoader /> :
          <section className="w-full px-4 py-8 mx-auto max-w-1920 bg-light lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
            <header className="mb-10 sm:mt-2 lg:mb-14 xl:mt-4">
              <h1 className="mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl">
                {t('Shipping Policy')}
              </h1>
              <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
                {date}
              </p>
            </header>

            <div className="flex flex-col md:flex-row">



              <div className="md:w-9/12 md:pb-10 ltr:md:pl-8 rtl:md:pr-8">

                {
                  shipping?.description ?
                    <Element
                      key={shipping?.title}
                      name={makeTitleToDOMId(shipping?.title)}
                      className="mb-10"
                    >
                      <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                        {/* {t(shipping?.title)} */}
                      </h2>
                      <div
                        className="leading-loose text-body-dark"
                        dangerouslySetInnerHTML={{ __html: t(shipping?.description) }}
                      />
                    </Element> :
                    <NotFound
                      text="Shipping Policy Not yet"
                      className="mx-auto w-full md:w-7/12"
                    />
                }
                {/* {content?.map((item) => (
              <Element
                key={item.title}
                name={makeTitleToDOMId(item.title)}
                className="mb-10"
              >
                <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                  {t(item.title)}
                </h2>
                <div
                  className="leading-loose text-body-dark"
                  dangerouslySetInnerHTML={{ __html: t(item.description) }}
                />
              </Element>
            ))} */}
              </div>
              {/* End of content */}
            </div>
          </section>
      }
    </>
  );
}

ShippingpolicyPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'terms'])),
    },
  };
};
