export const Testimonial = () => {
  return (
    <div className='bg-white py-[140px] text-center flex justify-center flex-col items-center gap-[48px]'>
      <h1 className='w-[800px] text-[32px] leading-[48px] -tracking-wide font-light text-[#2C3338]'>
        “No other ecommerce platform allows people to start for free and grow
        their store as their business grows. More importantly, WooCommerce
        doesn’t charge you a portion of your profits as your business grows.”
      </h1>
      <div className='flex items-center'>
        <img
          src='assets/images/testimonial-profile.webp'
          alt=''
          className='w-[60px] rounded-full mr-[20px]'
        />
        <p>
          <strong>Chris Lema, </strong>
          <span className='underline'>chrislema.com</span>
        </p>
      </div>
    </div>
  )
}
