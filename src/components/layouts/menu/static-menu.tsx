import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const headerLinks = [
  // { href: Routes.shops, icon: null, label: 'nav-menu-shops' },
  { href: Routes.coupons, icon: null, label: 'nav-menu-offer' },
  { href: Routes.help, label: 'nav-menu-faq' },
  { href: Routes.contactUs, label: 'nav-menu-contact' },
];


const StaticMenu = () => {

  const router = useRouter() 


  const { t } = useTranslation('common');

  return (
    <>
      {headerLinks.map(({ href, label, icon }) => (
        <li key={`${href}${label}`} className='text-light'>
          <Link
            href={href}
            //text-heading
            className={`flex items-center font-normal active:text-green-500 hover:text-green-500 no-underline transition duration-200  focus:text-light` }
          >
            {icon && <span className="ltr:mr-2 rtl:ml-2">{icon}</span>}
           <span className={`${router.pathname == href ? 'text-green-500' : ''}`}>{t(label)}</span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
