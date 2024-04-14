import Button from './Button'

const row1 = ['01', '02', '03', '04']
const row2 = ['05', '06', '07']
const row3 = ['08', '09', '10', '11']
const row4 = [...Array(8).keys()]

function getCompanyDimension(img) {
  return {
    0: ['77', '54'],
    1: ['131', '22'],
    2: ['88', '36'],
    3: ['99', '29'],
    4: ['102', '17'],
    5: ['70', '32'],
    6: ['122', '21'],
    7: ['129', '28'],
  }[img]
}

export default function Gallery() {
  return (
    <div className='bg-gradient-to-b from-white to-gray-200 text-center overflow-clip'>
      <h1 className='text-[44px] pt-[50px] mb-[100px]'>
        Loved by millions of brands 💜
      </h1>
      {[row1, row2, row3, row4].map((row, index) => (
        <div
          key={index}
          className={`flex no-wrap gap-[76px] mb-[60px] ${
            index === 1
              ? 'translate-x-[-100px]'
              : index === 3
              ? 'justify-center items-center'
              : 'translate-x-[-440px]'
          }`}>
          {row.map(image => (
            <img
              key={image}
              src={
                index <= 2
                  ? `assets/images/gallery/img-${image}.webp`
                  : `assets/images/company/comp-0${image + 1}.webp`
              }
              width={index === 3 && `${getCompanyDimension(image)[0]}px`}
              height={index === 3 && `${getCompanyDimension(image)[1]}px`}
              className={index <= 2 && 'max-h-[332px]'}
            />
          ))}
        </div>
      ))}
      <Button text='Discover more' />
    </div>
  )
}
