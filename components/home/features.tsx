import Image from 'next/image'
import React from 'react'

import dummyImage from '@/public/assets/review.jpg'
import Link from 'next/link'

import arrowRight from '@/public/assets/icons/arrow-right.svg'
import HomeCarousel from '../home-carousel'

const Features = () => {
	return (
		<section className='w-full bg-pink-800 h-[calc(100vh-128px)] flex justify-between items-center gap-6 pb-6 px-6'>
			<div className='flex flex-col gap-6 h-full w-1/4'>
				<div className='bg-yellow-400 w-full h-1/2 flex flex-col rounded-lg border-3 border-black'>
					<div className='p-3 border-b-3 border-black'>
						<h2 className='font-heading text-3xl uppercase'>Homegrown</h2>
					</div>
					<div className='p-3 border-b-3 border-black flex-grow flex'>
						<Image src={dummyImage} alt='' className='rounded-lg  object-cover object-center h-full' priority />
					</div>
					<Link href='#' className='p-3 flex justify-between items-center group'>
						<span className='font-heading text-2xl uppercase font-medium'>View Show</span>
						<div className='bg-black rounded-full p-1 group-hover:-rotate-45 duration-300'>
							<Image src={arrowRight} alt='' className='size-7' />
						</div>
					</Link>
				</div>
				<div className='bg-yellow-400 w-full h-1/2 flex flex-col rounded-lg border-3 border-black'>
					<div className='p-3 border-b-3 border-black'>
						<h2 className='font-heading text-3xl uppercase'>Homegrown</h2>
					</div>
					<div className='p-3 border-b-3 border-black flex-grow flex'>
						<Image src={dummyImage} alt='' className='rounded-lg  object-cover object-center h-full' priority />
					</div>
					<Link href='#' className='p-3 flex justify-between items-center group'>
						<span className='font-heading text-2xl uppercase font-medium'>View Show</span>
						<div className='bg-black rounded-full p-1 group-hover:-rotate-45 duration-300'>
							<Image src={arrowRight} alt='' className='size-7' />
						</div>
					</Link>
				</div>
			</div>
			<div className=' w-full h-full flex flex-col rounded-lg border-3 border-black'>
				<div className=' border-b-3 border-black flex-grow flex w-full h-4/5'>
					<Image src={dummyImage} alt='' className=' object-cover object-center h-full w-full' priority />
				</div>

				<div className="flex h-1/5">
  <div className="flex flex-col justify-center items-start bg-black text-font-light p-5 flex-grow">
    <h2 className="font-heading uppercase text-3xl line-clamp-1 font-semibold">RTR2 IS LIVE</h2>
    <p className="leading-[1.6] line-clamp-2 text-xl">
      Apply to receive $1000 sponsorship campaign on RTRFM to help with your next gig thanks to Shelter Brewing Co.
    </p>
  </div>
  <div className="bg-white flex  justify-center items-center flex-grow-0">
    <Link href="#" className="p-3 px-12 flex justify-center items-center flex-wrap text-center gap-3">
      <span className="uppercase font-semibold font-accent">Zobacz</span>
      <div className="bg-black rounded-full p-1 group-hover:-rotate-45 duration-300">
        <Image src={arrowRight} alt="" className="size-7" />
      </div>
    </Link>
  </div>
</div>

			</div>
		</section>
	)
}

export default Features
