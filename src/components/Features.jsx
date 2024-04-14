import Button from './Button'

const sections = [
  {
    heading: 'Get expert help with WooCommerce',
    subheading:
      'Save time, sell more, and stay ahead of the competition — hire one of our trusted WooExpert agencies to help you start or optimize your WooCommerce store. ',
    button: 'Hire an expert',
    image: 'assets/images/feature/feature1.webp',
  },
  {
    heading: 'Power up your WooCommerce store',
    subheading:
      'Already sell on Woo? Our Marketplace has hundreds of extensions and themes to boost your conversion and streamline your business.',
    button: 'Check it out',
    image: 'assets/images/feature/feature2.webp',
  },
  {
    heading: 'Custom solutions for high-volume stores',
    subheading:
      'Woo offers next-level customization, advanced selling features, and dedicated support to help established merchants continue growing.',
    button: 'Explore enterprise solutions',
    image: 'assets/images/feature/feature3.webp',
  },
]

export const Features = () => {
  return (
    <div className='bg-white p-24 pt-0 bg-gradient-to-b from-[#F2EDFF80] to-white'>
      {sections.map((item, index) => {
        return (
          <section
            key={index}
            className={`flex gap-10 justify-center items-center ${
              index & 1 && 'flex-row-reverse'
            }`}>
            <div className='flex flex-col gap-5 items-start w-[643px] pr-[90px] justify-start'>
              <h1 className='text-5xl font-bold'>{item.heading}</h1>
              <h2>{item.subheading}</h2>
              <Button customClass='mb-0 !self-start' text={item.button} />
            </div>
            <img src={item.image} alt='' className='w-[493px]' />
          </section>
        )
      })}
    </div>
  )
}
