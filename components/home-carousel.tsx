// 'use client'

// import React, { useRef, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'

// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// import arrowRight from '@/public/assets/icons/arrow-right.svg'
// import dummyImage from '@/public/assets/review.jpg'

// import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import Image from 'next/image'
// import Link from 'next/link'
// const HomeCarousel = () => {
// 	return (
// 		<>
// 			<Swiper
// 				pagination={{
// 					type: 'fraction',
// 				}}
// 				navigation={true}
// 				grabCursor={true}
// 				autoplay={{
// 					delay: 5000,
// 					disableOnInteraction: true,
// 				}}
// 				modules={[Autoplay, Pagination, Navigation]}
// 				className='mySwiper'>
// 				<SwiperSlide>
// 					<div className=' w-full h-full flex flex-col rounded-lg border-3 border-black'>
// 						<div className=' border-b-3 border-black flex-grow flex w-full h-4/5'>
// 							<Image src={dummyImage} alt='' className=' object-cover object-center h-full w-full' priority />
// 						</div>

// 						<div className='flex h-1/5'>
// 							<div className='flex flex-col justify-center items-start bg-black text-font-light p-5 flex-grow'>
// 								<h2 className='font-heading uppercase text-3xl line-clamp-1 font-semibold'>RTR2 IS LIVE</h2>
// 								<p className='leading-[1.6] line-clamp-2 text-xl text-left'>
// 									Apply to receive $1000 sponsorship campaign on RTRFM to help with your next gig thanks to Shelter
// 									Brewing Co.
// 								</p>
// 							</div>
// 							<div className='bg-white flex  justify-center items-center flex-grow-0'>
// 								<Link href='#' className='p-3 px-12 flex justify-center items-center flex-wrap text-center gap-3 group'>
// 									<span className='uppercase font-semibold font-accent'>Zobacz</span>
// 									<div className='bg-black rounded-full p-1 group-hover:-rotate-45 duration-300 size-12 '>
// 										<Image src={arrowRight} alt='' />
// 									</div>
// 								</Link>
// 							</div>
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 			</Swiper>
// 		</>
// 	)
// }

// export default HomeCarousel


'use client'

import { Swiper } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { Autoplay, Navigation,Pagination,EffectFade } from 'swiper/modules'
import ButtonsFraction from './buttons-fraction'
import { useRef } from 'react'
import 'swiper/css/effect-fade';
interface CarouselProps {
	
	children: React.ReactNode 
}

const HomeCarousel = ({  children }: CarouselProps) => {

    const swiperRef = useRef<SwiperType | null>(null)

	return (
		<>


			<Swiper
				// pagination={{
					// 	type: 'fraction',
					// }}
					onSwiper={swiper => (swiperRef.current = swiper)}
					
					// effect={'fade'}
					loop={true}
					grabCursor={true}
					// autoplay={{
				// 	delay: 2500,
				// 	disableOnInteraction: false,
				// }}
				
				
				modules={[Autoplay,Pagination, Navigation,EffectFade]}
				className='mySwiper  text-black'>
            {/* <ButtonsFraction swiperRef={swiperRef} className='xl:hidden pt-11'/> */}

				{children}
				<ButtonsFraction swiperRef={swiperRef} className='hidden xl:block absolute left-10 bottom-44 z-50'/>

			</Swiper>


					</>
		
	)
}

export default HomeCarousel