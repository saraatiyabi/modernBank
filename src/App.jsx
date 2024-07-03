import React from 'react'
import {
  Navbar, Billing, Business, CardDeal,
  Clients, CTA, Footer, Hero, Stats, Testimonials
} from './components'

const App = () => {
  return (
    <div className="w-full bg-primary px-6 sm:px-16">
      <div className='w-full flex justify-center items-center'>
        <div className='w-full xl:max-w-[1280px]'>
          <Navbar />
        </div>
      </div>

      <div className='bg-primary flex justify-center items-start'>
        <div className='w-full xl:max-w-[1280px]'>
          <Hero />
        </div>
      </div>

      <div className='bg-primary flex justify-center items-center sm:px-16 px-6'>
        <div className='w-full xl:max-w-[1280px]'>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App