import { privacyPolicy } from '@/framework/static/privacy';
import { Link, Element } from 'react-scroll';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import client from '@/framework/client';
import {useState,useEffect} from 'react'
import NotFound from '@/components/ui/not-found';
import PageLoader from '@/components/ui/loaders/page-loader';


function makeTitleToDOMId(title: string) {
  return title.toLowerCase().split(' ').join('_');
}

export default function PrivacyPage() {
  const { t } = useTranslation('policy');
  const { title, date, content } = privacyPolicy; 
  // const [isLodaing,setloading] = useState(false)

  const [policy,setPolicy] = useState<any>()

  const {data,isLoading} = useQuery(
    [API_ENDPOINTS.FRONTPAGE, 'policy'],
    ({queryKey}) => client.Counter.page()
   ) 

   useEffect(() => {
    const find = data?.data?.find((e: { title: string; }) => e.title == 'privacy_policy')
    if(find ){
      setPolicy(JSON.parse(find?.value))
    }
   },[data])


  return (
    <>
      <Seo title="Privacy" url="privacy" />
      {
        isLoading ? 
        <PageLoader /> :
      <section className="w-full px-4 py-8 mx-auto max-w-1920 bg-light lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <header className="mb-10 sm:mt-2 lg:mb-14 xl:mt-4">
          <h1 className="mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl">
            {t(title)}
          </h1>
          <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
            {date}
          </p>
        </header>
        {/* End of page header */}

        <div className="flex flex-col md:flex-row">
          {/* <nav className="mb-8 md:mb-0 md:w-72 xl:w-3/12 hidden">
            <ol className="sticky z-10 md:top-16 lg:top-22">
              {content?.map((item) => (
                <li key={item.title}>
                  <Link
                    spy={true}
                    offset={-120}
                    smooth={true}
                    duration={500}
                    to={makeTitleToDOMId(item.title)}
                    activeClass="text-sm lg:text-base text-heading font-semibold"
                    className="inline-flex py-3 uppercase cursor-pointer text-sub-heading"
                  >
                    {t(item.title)}
                  </Link>
                </li>
              ))}
            </ol>
          </nav> */}
          {/* End of section scroll spy menu */}

          <div className="md:w-9/12 md:pb-10 ltr:md:pl-8 rtl:md:pr-8">

            { 
              policy?.description ? 
              <Element
               key={policy?.title}
              name={makeTitleToDOMId(policy?.title)}
              className="mb-10"
            >
              <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                {/* {t(policy?.title)} */}
              </h2>
              <div
                className="leading-loose text-body-dark"
                dangerouslySetInnerHTML={{ __html: t(policy?.description) }}
              />
              </Element> : 
                                <NotFound
                                text="Policy Policy Not Yet"
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

PrivacyPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'policy'])),
    },
  };
};
