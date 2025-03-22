import { cn } from '@/lib/utils';
import React from 'react'
import Marquee from "react-fast-marquee";


const Ribbon = ({textFirst,textSecond,className,speed} : {textFirst: string, textSecond: string, className?: string,speed?: number}) => {
  return (
    
   

    <Marquee autoFill speed={speed} className={`${cn('bg-[#D9D5CA] py-2  overflow-hidden border-y-3 border-black ', className)}`} >
        
        <div className='flex  items-center justify-center gap-4 mr-4'>

        <span className='text-6xl font-heading font-bold uppercase text'>• {textFirst} •</span>
        <span className='text-5xl font-accent font-medium uppercase text-ownPurple-400 mt-1 tracking-tight
'>{textSecond}</span>
        </div>
       
        
       
    </Marquee>

  )
}

export default Ribbon