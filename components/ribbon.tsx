import React from 'react'
import Marquee from "react-fast-marquee";

const Ribbon = () => {
  return (
    
    <Marquee autoFill speed={10} className='bg-[#D9D5CA] py-5  overflow-hidden border-y border-black '>
        
        <div className='flex  items-center justify-center gap-4 mr-4'>

        <span className='text-6xl font-heading font-medium uppercase '>• The Sound •</span>
        <span className='text-5xl font-accent font-medium uppercase text-ownPurple-400 mt-1 '>alternative</span>
        </div>
       
        
       
    </Marquee>
  )
}

export default Ribbon