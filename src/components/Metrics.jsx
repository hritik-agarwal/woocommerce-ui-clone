const sections = [
  {
    value: '3.6',
    symbol: 'M',
    of: 'online stores built with WooCommerce',
    subtext: 'StoreLeads (using Woo Cart/Checkout), State of Ecommerce',
  },
  {
    value: '31',
    symbol: '%',
    of: 'of the top 1 million ecommerce sites',
    subtext: 'StoreLeads (using Woo Cart/Checkout), State of Ecommerce',
  },
  {
    value: '43',
    symbol: '%',
    of: 'of the web is built on WordPress',
    subtext: 'W3Techs, Usage Statistics and Market Share of WordPress',
  },
]

export default function Metrics() {
  return (
    <div className='pt-[150px] pb-[120px] px-[50px] flex flex-col items-center gap-[120px] bg-[#F9F9F9]'>
      <h1 className='text-5xl max-w-[700px] font-bold'>
        The most-trusted ecommerce platform for building success ✨
      </h1>
      <div className='flex gap-20'>
        {sections.map((item, index) => {
          return (
            <div
              key={index}
              className='flex flex-col items-start bg-white pt-0 px-[30px] pb-[15px] rounded-2xl'>
              <p className='text-[120px]'>
                {item.value} <sup className='-left-[10px]'>{item.symbol}</sup>
              </p>
              <p className='text-[24px] text-[#2c3338] font-light mb-[40px]'>
                {item.of}
              </p>
              <p className='text-[12px] text-[#bbbbbb]'>{item.subtext}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
