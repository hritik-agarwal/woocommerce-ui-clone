import {VscSearch} from 'react-icons/vsc'

export default function Header() {
  return (
    <header className='bg-white'>
      <div className='flex flex-row-reverse gap-[20px] text-xs mx-[24px]'>
        <span>Get Support</span>
        <span>Hire an Expert</span>
        <span>Develop on Woo</span>
        <span>English (United States)</span>
        <span>$ USD</span>
      </div>
      <nav className='flex justify-between items-center mx-[24px]'>
        <div className='flex items-center'>
          <img
            src={'assets/images/company-logo.svg'}
            alt='company logo'
            width='71px'
          />
          <span className='nav-link-padding'>Sell</span>
          <span className='nav-link-padding'>Extensions</span>
          <span className='nav-link-padding'>Resources</span>
          <span className='nav-link-padding'>Enterprise Ecommerce</span>
        </div>
        <div className='flex items-center'>
          <VscSearch />
          <span className='my-[10px] mx-[16px] px-[10px] py-[8px]'>Log in</span>
          <button className='py-[10px] px-[24px] border-2 rounded-lg border-purple'>
            Get started
          </button>
        </div>
      </nav>
    </header>
  )
}
