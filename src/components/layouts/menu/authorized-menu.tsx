import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { siteSettings } from '@/config/site';
import Avatar from '@/components/ui/avatar';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import { avatarPlaceholder } from '@/lib/placeholders';
import { UserOutlinedIcon } from '@/components/icons/user-outlined';
import { useLogout, useUser } from '@/framework/user';
import { CartOutlinedIcon } from '@/components/icons/cart-outlined';
import { HeartOutlineIcon } from '@/components/icons/heart-outline';
import { useCart } from '@/store/quick-cart/cart.context';
import { useWishlist } from '@/framework/wishlist';




const AuthorizedMenu: React.FC<{ minimal?: boolean }> = ({ minimal }) => {
  const { mutate: logout } = useLogout();
  const { me } = useUser();
  const router = useRouter();
  const { t } = useTranslation('common');
  const {totalItems} = useCart()
  const {wishlists} = useWishlist()
  const WishlistC_count = wishlists?.length ?? 0
  // const WishlistC_count = me?.wishlistCount ?? 0
  function handleClick(path: string) {
    router.push(path);
  }



  return (
    // <Menu
    //   as="div"
    //   className="relative inline-block ltr:text-left rtl:text-right"
    // >
    //   <Menu.Button className="flex items-center focus:outline-0">
    //     {minimal ? (
    //       <UserOutlinedIcon className="h-5 w-5" />
    //     ) : (
    //       <Avatar
    //         src={me?.profile?.avatar?.thumbnail ?? avatarPlaceholder}
    //         title="user name"
    //         className="h-10 w-10"
    //       />
    //     )}
    //     <span className="sr-only">{t('user-avatar')}</span>
    //   </Menu.Button>

    //   <Transition
    //     as={Fragment}
    //     enter="transition ease-out duration-100"
    //     enterFrom="transform opacity-0 scale-95"
    //     enterTo="transform opacity-100 scale-100"
    //     leave="transition ease-in duration-75"
    //     leaveFrom="transform opacity-100 scale-100"
    //     leaveTo="transform opacity-0 scale-95"
    //   >
    //     <Menu.Items
    //       as="ul"
    //       className={cn(
    //         'absolute mt-1 w-48 rounded bg-white pb-4 shadow-700 focus:outline-none ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left',
    //         {
    //           '!mt-2': minimal,
    //         }
    //       )}
    //     >
    //       <Menu.Item>
    //         <li className="flex w-full items-center justify-between bg-accent-500 px-6 py-4 text-xs font-semibold capitalize text-light focus:outline-none ltr:text-left rtl:text-right">
    //           <span>{t('text-points')}</span>
    //           <span>{me?.wallet?.available_points ?? 0}</span>
    //         </li>
    //       </Menu.Item>
    //       {siteSettings.authorizedLinks.map(({ href, label }) => (
    //         <Menu.Item key={`${href}${label}`}>
    //           {({ active }) => (
    //             <li>
    //               <button
    //                 onClick={() => handleClick(href)}
    //                 className={cn(
    //                   'block w-full py-2.5 px-6 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent focus:outline-0 ltr:text-left rtl:text-right',
    //                   active ? 'text-accent' : 'text-heading'
    //                 )}
    //               >
    //                 {t(label)}
    //               </button>
    //             </li>
    //           )}
    //         </Menu.Item>
    //       ))}
    //       <Menu.Item>
    //         <li>
    //           <button
    //             onClick={() => logout()}
    //             className={cn(
    //               'block w-full py-2.5 px-6 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent       focus:outline-0 ltr:text-left rtl:text-right'
    //             )}
    //           >
    //             {t('auth-menu-logout')}
    //           </button>
    //         </li>
    //       </Menu.Item>
    //     </Menu.Items>
    //   </Transition>
    // </Menu>

    <div className='flex'>
      <div className='topBage1'>
      <HeartOutlineIcon onClick={()=>handleClick('/wishlists')} className={cn(`ml-1 active:text-accent hover:text-accent cursor-pointer text-sad transition-all ${router.pathname == '/wishlists'?'text-accent':''}`)} />
      <span className='topBgde bg-accent'>{WishlistC_count}</span>
      </div>
      <UserOutlinedIcon onClick={()=>handleClick('/profile')} className={cn(`ml-5 active:text-accent hover:text-accent cursor-pointer text-sad transition-all ${router.pathname == '/profile'?'text-accent':''}`)} />
      <div className='topBage1'>
      <CartOutlinedIcon onClick={()=>document.getElementById('CartBtnEnable')?.click()} className={cn(`ml-5 active:text-accent hover:text-accent text-sad cursor-pointer  transition-all ${router.pathname == '/orders'?'text-accent':''}`)} />
      {/* <CartOutlinedIcon onClick={()=>document.getElementById('CartBtnEnable')?.click()} className={cn(`ml-5 active:text-accent hover:text-accent text-screen cursor-pointer  transition-all ${router.pathname == '/orders'?'text-accent':''}`)} /> */}
      <span className='topBgde bg-accent'>{totalItems}</span>
      </div>
    </div>
  );
};

export default AuthorizedMenu;
