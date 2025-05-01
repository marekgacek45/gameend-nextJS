import Link from 'next/link'
import React from 'react'
import ScrollToTop from './scroll-to-top'
import Ribbon from './ribbon'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (

		<footer>
		
		<div className='relative mt-12 tex'>
				<div className='absolute inset-0 '>
					<Ribbon
						speed={50}
						textFirst='The Sound'
						textSecond='alternative'
						className='rotate-[2deg] py-1 bg-black text-white'
					/>
				</div>
				<div className='absolute inset-0'>
					<Ribbon speed={15} textFirst='The Sound' textSecond='alternative' className='rotate-[-2deg] py-1 ' />
				</div>
			</div>
		
		

		<div className='bg-ownOrange-400 pt-50'>
			<div className='border-y-2 border-black py-4 px-8  text-center '>
				<p>
					RTRFM broadcasts from Whadjuk Noongar Boodjar, where sovereignty was never ceded. We pay our respects to
					elders past and present, as well as the next generation’s emerging leaders, and commit to celebrating their
					art, culture and resilience through our programming.
				</p>
			</div>
			<div className='flex flex-col sm:flex-row justify-between items-center  px-8 py-4 gap-4 sm:gap-0 font-accent font-bold uppercase text-[10px]'>
				<span className='  '>© {currentYear} gameend</span>

				<span>
					Site by
					<Link href='https://marekgacekdev.pl' target='_blank' rel='noreferrer nofolow' className='underline ml-2'>
						Marek Gacek
					</Link>
				</span>


				<ScrollToTop/>
			</div>
		</div>
		</footer>
	)
}

export default Footer
