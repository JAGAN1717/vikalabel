import Link from '@/components/ui/link';
import { Image } from '@/components/ui/image';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { Routes } from '@/config/routes';
import { Product } from '@/types';
import { productPlaceholder } from '@/lib/placeholders';
import usePrice from '@/lib/use-price';
import { ExternalIcon } from '@/components/icons/external-icon';
import dynamic from 'next/dynamic';
import { HeartOutlineIcon } from '@/components/icons/heart-outline';
import { HeartFillIcon } from '@/components/icons/heart-fill';
import react,{useState} from 'react'
import { useModalAction } from '@/components/ui/modal/modal.context';
import { PlusIcon } from '@/components/icons/plus-icon';


type RadonProps = {
  product: Product;
  className?: string;
};

const FavoriteButton = dynamic(
  () => import('@/components/products/details/favorite-button'),
  { ssr: false }
);

const AddToCart = dynamic(
  () =>
    import('@/components/products/add-to-cart/add-to-cart').then(
      (module) => module.AddToCart
    ),
  { ssr: false }
);




const Radon: React.FC<RadonProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  const { id,name, slug, image, author, min_price,in_wishlist, quantity, max_price, product_type, is_external, external_product_url, external_product_button_text } =
    product ?? {};
    
    const { openModal } = useModalAction();

    function handleProductQuickView() {
      return openModal('PRODUCT_DETAILS', product.slug);
    }

  const { price, basePrice, discount } = usePrice({
    amount: product.sale_price ? product.sale_price : product.price!,
    baseAmount: product.price,
  });
  const { price: minPrice } = usePrice({
    amount: min_price!,
  });
  const { price: maxPrice } = usePrice({
    amount: max_price!,
  });

  return (
    <article
      className={cn(
        'product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200',
        className
      )}
    >
      <div className='card_pro overflow-hidden'>
      <Link href={Routes.product(slug)} className="cursor-pointer">
        <Image
          src={image?.original ?? productPlaceholder}
          alt={name}
          width={600}
          height={888}
          className="product-image rounded-md object-cover"
          style={{height:'350px'}}
        />
      </Link>
      <div className='card_wish'>
        {/* {
          in_wishlist ? 
          <HeartFillIcon />
          :
        <HeartOutlineIcon />
        } */}
        <FavoriteButton
          productId={id}
          wishlist={in_wishlist} 
        />
       </div>

  
        {/* <div className='card_tf'>
          {Number(quantity) > 0 && (
              <AddToCart variant="neon" data={product} />
            )}
          </div> */}
     {product_type.toLowerCase() === 'variable' ? (
          <>
          <div className='card_tf add_vari'>
            {Number(quantity) > 0 && (
              <button
                onClick={handleProductQuickView}
                className="group flex h-7 w-full items-center justify-between rounded bg-gray-100 text-xs text-body-dark transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-0 md:h-9 md:text-sm"
              >
                <span className="flex-1">{t('text-add')}</span>
                <span className="grid h-7 w-7 place-items-center bg-gray-200 transition-colors duration-200 group-hover:bg-accent-600 group-focus:bg-accent-600 ltr:rounded-tr ltr:rounded-br rtl:rounded-tl rtl:rounded-bl md:h-9 md:w-9">
                  <PlusIcon className="h-4 w-4 stroke-2" />
                </span>
              </button>
            )}
            </div>
          </>
        ) : (
          <>
        <div className='card_tf'>
          {Number(quantity) > 0 && (
              <AddToCart variant="neon" data={product} />
            )}
          </div> 
          </>
        )}
      </div>

      {/* End of product image */}

      <div className='flex justify-between gap-3 pt-4'>
        <div className="flex shrink-0 flex-col space-y-2">
          {name && (
            <Link
              href={Routes.product(slug)}
              className="text-sm font-semibold text-heading transition-colors hover:text-green-600 md:text-base"
              title={name}
            >
              {name}
            </Link>
          )}

          {author && (
            <span className="text-xs text-gray-400 md:text-sm">
              {t('text-by')}
              <Link
                href={Routes.author(author?.slug!)}
                className="text-body transition-colors hover:text-green-600 ltr:ml-1 rtl:mr-1"
              >
                {author?.name}
              </Link>
            </span>
          )}

          <div className="flex shrink-0 items-center">
            {product_type.toLowerCase() === 'variable' ? (
              // <p className="text-sm font-semibold text-orange-500 md:text-base">
              <p className="text-sm font-semibold  md:text-base">
                {minPrice}

                <span className="text-heading"> - </span>

                {maxPrice}
              </p>
            ) : (
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                {/* <span className="text-base font-semibold text-orange-500"> */}
                <span className="text-base font-semibold ">
                  {price}
                </span>
                {basePrice && (
                  <del className="text-xs font-semibold text-gray-400 ltr:mr-2 rtl:ml-2">
                    {basePrice}
                  </del>
                )}
                {discount && (
                  <div className="text-xs text-accent">
                    ({t('text-save')} {discount})
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {is_external ?
          <Link href={external_product_url} className='transition-all hover:text-orange-500'>
            <ExternalIcon className="h-5 w-5 stroke-2" />
          </Link>
          : null}
      </div>
      {/* End of product info */}
    </article>
  );
};

export default Radon;
