//finished

'use client'

import { Swiper as SwiperType } from 'swiper'

import { useRef } from 'react'
import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import FeaturedPostsCarouselButtons from '@/components/home/hero/featured-posts-carousel-buttons'

import 'swiper/css'



type Props = {
	children: React.ReactNode
}

const FeaturedPostsCarousel = ({ children }: Props) => {
	const swiperRef = useRef<SwiperType | null>(null)

	return (
		<>
			<Swiper
				onSwiper={swiper => (swiperRef.current = swiper)}
				loop={true}
				grabCursor={true}
				modules={[Navigation]}
				className='mySwiper  text-black'>
				{children}
				<FeaturedPostsCarouselButtons swiperRef={swiperRef} className='hidden lg:block absolute left-10 bottom-44 z-50' />
			</Swiper>
		</>
	)
}

export default FeaturedPostsCarousel
