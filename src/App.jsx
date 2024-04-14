import {Features} from './components/Features'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Service from './components/Service'
import {Testimonial} from './components/Testimonial'

export default function App() {
  return (
    <div className='min-h-screen bg-black/[.07]'>
      <div className='max-w-[1500px] m-auto'>
        <Header />
        <Hero />
        <Service />
        <Gallery />
        <Testimonial />
        <Features />
        <Metrics />
        <Testimonial />
      </div>
    </div>
  )
}
