'use client'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import dummyImage from '@/public/assets/review.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
const HomeCarousel = () => {
	return (
		<>
			<Swiper
				pagination={{
					type: 'fraction',
				}}
				navigation={true}
				grabCursor={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: true,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'>
				<SwiperSlide>
					<div>
						<div>
							<Image
								src={dummyImage}
								alt=''
								width={350}
								height={200}
								className=' w-full object-cover object-center'
								priority
							/>
						</div>

						<div className='flex justify-between '>
							<div className='bg-black text-font-light p-6 text-left flex flex-col gap-4'>
                            <h2 className='font-heading uppercase text-3xl line-clamp-1'>RTR2 IS LIVE</h2>
							<p className='leading-[1.6] line-clamp-2'>
								Apply to receive $1000 sponsorship campaign on RTRFM to help with your next gig thanks to Shelter
								Brewing Co.
							</p>
                            </div>

                            <div className='bg-background flex justify-center items-center w-[300px]'>
                                Listen now
                            </div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default HomeCarousel
