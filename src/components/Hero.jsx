export default function Hero() {
  return (
    <div className='flex justify-between items-center bg-white w-full'>
      <img src={'../assets/images/hero-left-img2@2x.webp'} alt='' width='18%' />
      <main className='max-w-[50%] text-center flex flex-col gap-[42px]'>
        <h1 className='text-[68px] leading-none'>
          WooCommerce is the platform that grows with you
        </h1>
        <p className='font-sans text-lightText'>
          No matter what success looks like for you, you can do it with
          WooCommerce. Our WordPress-based ecommerce platform helps merchants
          and developers build successful businesses for the long term.{' '}
        </p>
        <button className='py-[15px] px-[25px] bg-purple rounded-lg font-bold w-[150px] text-white self-center'>
          Get started
        </button>
      </main>
      <img src={'assets/images/hero-right-img2@2x.webp'} alt='' width='18%' />
    </div>
  )
}
