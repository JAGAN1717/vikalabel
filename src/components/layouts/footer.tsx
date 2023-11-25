import { useTranslation } from 'next-i18next';
import { siteSettings } from '@/config/site';
import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import SubscriptionWidget from '@/components/settings/subscribe-to-newsletter';
import { useCategories } from '@/framework/category';
import { useState, useEffect } from 'react'
import { UrlObject } from 'url';
import { useSettings } from '@/framework/settings';
import { authorizationAtom } from '@/store/authorization-atom';
import { useAtom } from 'jotai';
import { getIcon } from '@/lib/get-icon';
import * as socialIcons from '@/components/icons/social';





const Footer = () => {


  const varient = {
    language: "en",
    limit: 1000,
    parent: "null",
    type: "clothing"
  }

  const { settings }: any = useSettings()
  const [socials,setsocials] = useState<any>([]) 


  useEffect(()=> {
    setsocials(settings?.contactDetails?.socials)
  },[settings])

  const [isAuthorize] = useAtom(authorizationAtom);

  // const [categoryLinks,setCategoryLinks] = useState<any>([])

  const { categories } = useCategories(varient);

  let categoryLink: { name: string; href: string; }[] = []
  categories.forEach(val => {
    categoryLink.push({ name: val?.name, href: `/${val?.type?.slug}/search/?category=${val.slug}` })
  })

  // useEffect(() => {
  //   let categoryLink: { name: string; href: string; }[] = []
  //   categories.forEach(val => {
  //     categoryLink.push({name:val?.name, href:`/${val?.type?.slug}/search/?category=${val.slug}`})
  //   })
  //   setCategoryLinks(categoryLink)
  // },[categories])



  const { t } = useTranslation('common');
  return (<>
    {/* <div className="flex  w-full flex-col border-gray-800 bg-Footer px-5 md:px-10 lg:border-b-8 lg:px-[50px] xl:px-24"> */}
    <div className="flex w-full flex-col border-gray-800 bg-Footer p-5 md:px-10 lg:border-b-8 lg:px-[50px] xl:px-24">
      {/* Top */}
      {/* <div className=" container mx-auto px-4 grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 md:pt-16 md:grid-cols-4 lg:pt-24 lg:pb-16 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 2xl:grid-cols-5"> */}
      <div className=" container mx-auto px-4 grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 md:pt-16 md:grid-cols-4 lg:pt-24 lg:pb-16 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-4">
        <div className="flex flex-col">
          <div className="mb-[2px] flex h-16 items-start">
            <Logo />
          </div>

          <address className="mb-7 text-md not-italic text-heading">
            {t(settings?.contactDetails?.location?.formattedAddress)}
            {/* {t(siteSettings.footer.address)} */}
          </address>
          {/* <span className="mb-1 text-md text-heading cursor-pointer hover:text-lime-900" onClick={() => window.open('https://' + settings?.contactDetails?.website, '_blank')}> */}
          <span className="mb-1 text-md text-heading " >
            {t(settings?.contactDetails?.website)}
            {/* {t(siteSettings.footer.email)} */}
          </span>
          <span className="text-md text-heading">
            {t(settings?.contactDetails?.contact)}
            {/* {t(siteSettings.footer.phone)} */}
          </span>

          {socials && (
          <div className="mt-5 flex items-center space-x-5 rtl:space-x-reverse">
            {socials?.map((item: any, index: number) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className={`cursor-pointer text-body transition-colors duration-300 hover:text-accent focus:outline-none`}
                rel="noreferrer"
              >
                {getIcon({
                  iconList: socialIcons,
                  iconName: item.icon,
                  className:`w-7 h-4 ${item.icon == 'FacebookIcon' && 'text-blue-600'} ${item.icon == 'InstagramIcon' && 'text-pink-600' } ${item.icon == 'TwitterIcon' && 'text-sky-600' } ${item.icon == 'YouTubeIcon' && 'text-red-600'}`,
                })}
              </a>
            ))}
          </div>
        )}
        </div>


        {siteSettings.footer.menus.map((menu, idx) => {

          if (menu.title === 'CATEGORY') {
            return (
              <div className="flex flex-col" key={`${menu.title}-${idx}`}>
                <h3 className="mt-3 mb-4 font-semibold text-heading lg:mb-7">
                  {t(menu.title)}
                </h3>

                <ul className="space-y-3">
                  {categoryLink.slice(0, 4).map((link: { href: string | UrlObject; name: any; }, index: any) => (
                    <li key={`${link.href}-${index}`}>
                      <Link
                        href={link.href}
                        className="text-md text-heading transition-colors hover:text-lime-900"
                      >
                        {t(link.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          } else {
            return (
              <div className="flex flex-col" key={`${menu.title}-${idx}`}>
                <h3 className="mt-3 mb-4 font-semibold text-heading lg:mb-7">
                  {t(menu.title)}
                </h3>

                <ul className="space-y-3">
                  {menu.links.map((link: { href: string | UrlObject; name: string; }, index: any) => (
                    <li key={`${link.href}-${index}`}>
                      {
                        link.name === 'Orders' ?
                        isAuthorize ? 
                        <Link
                        href={link.href}
                        className="text-md text-heading transition-colors hover:text-lime-900"
                      >
                        {t(link.name)}
                      </Link> :   
                                  <a onClick={()=> document.getElementById('clickLoginBtn')?.click()}
                                     className="text-md text-heading cursor-pointer transition-colors hover:text-lime-900"
                                   >
                                     {t(link.name)}
                                   </a>
                           :
                          <Link
                            href={link.href}
                            className="text-md text-heading transition-colors hover:text-lime-900"
                          >
                            {t(link.name)}
                          </Link>
                      }
                    </li>
                  ))}
                </ul>
              </div>
            )
          }

        })}

        <div className="col-span-full md:col-span-2 lg:col-auto">
          <SubscriptionWidget
            title="text-subscribe-now"
            description="text-subscribe-details"
          />

        </div>


      </div>

    </div>
    {/* Bottom */}
    <div className="mt-8 flex w-full flex-col bg-accent items-center  border-t border-gray-200 pt-2 pb-2 lg:mt-0 lg:flex-row lg:justify-between lg:border-t-0 px-5 md:px-10  lg:px-[50px] xl:px-24">
      <span className="order-2 text-md text-light lg:order-1">
        &copy; {new Date().getFullYear()} {t('text-copyright')} {' '}
        {/* <Link
            className="font-bold text-light transition-colors hover:text-accent"
            href={siteSettings.footer.copyright.href}
          >
            {siteSettings.footer.copyright.name}.
          </Link>{' '}
          {t('text-rights-reserved')} */}
      </span>

      {siteSettings.footer.payment_methods && (
        <div className="order-1 mb-5 flex items-center space-x-5 rtl:space-x-reverse lg:order-2 lg:mb-0">
          {siteSettings.footer.payment_methods.map((method, idx) => (
            <Link
              className="relative flex h-6 w-auto items-center overflow-hidden"
              key={`${method.url}-${idx}`}
              href={method.url}
            >
              <img src={method.img} className="max-h-full max-w-full" />
            </Link>
          ))}
        </div>
      )}
    </div>
  </>
  );
};

export default Footer;
