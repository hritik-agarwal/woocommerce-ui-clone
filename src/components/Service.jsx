import Button from './Button'

const services = [
  {
    id: 1,
    heading: 'I want to sell online',
    subHeading:
      'The first step to selling online with WooCommerce is to find a host for your store.',
    buttonName: 'Get started',
    image: 'assets/images/sell-img.webp',
  },
  {
    id: 2,
    heading: 'I want to build stores for others',
    subHeading:
      'Build powerful ecommerce solutions with WooCommerce, our truly open, WordrPress-based platform.',
    buttonName: 'Learn more',
    image: 'assets/images/build-img.webp',
  },
]

export default function Service() {
  return (
    <div className='bg-white text-center pb-[100px]'>
      <h1 className='text-[44px] mb-[40px]'>How can Woo help you?</h1>
      <div className='flex gap-[24px] mx-[65px]'>
        {services.map(item => (
          <div
            key={item.id}
            className={`p-[60px] pb-0 flex flex-col items-center ${
              item.id === 1 ? 'bg-cardGray' : 'bg-cardPurple'
            }`}>
            <h2 className='text-[30px] mb-[20px]'>{item.heading}</h2>
            <p className='mb-[20px] max-w-[553px] text-[18px] text-lightText'>
              {item.subHeading}
            </p>
            <Button text={item.buttonName} />
            <img src={item.image} alt='' width='482px' />
          </div>
        ))}
      </div>
    </div>
  )
}
