//  finished

import { cn } from '@/lib/utils'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import SwiperInstance from 'swiper'

import arrowRight from '@/public/assets/icons/arrow-right.svg'
import arrowLeft from '@/public/assets/icons/arrow-left.svg'

export interface SwiperButtonProps {
	swiperRef: React.RefObject<SwiperInstance | null>
	className?: string
}

const ButtonsFraction = ({ swiperRef, className }: SwiperButtonProps) => {
	const [currentSlide, setCurrentSlide] = useState(1)
	const [totalSlides, setTotalSlides] = useState(1)

	useEffect(() => {
		if (!swiperRef.current) return

		const swiper = swiperRef.current

		setTotalSlides(swiper.slides.length)

		const updateSlideNumber = () => {
			setCurrentSlide(swiper.realIndex + 1)
			setTotalSlides(swiper.slides.length)
		}

		swiper.on('slideChange', updateSlideNumber)

		return () => {
			swiper.off('slideChange', updateSlideNumber)
		}
	}, [swiperRef])

	return (
		<div className={`${cn('', className)} `}>
			<div className='flex justify-between items-center gap-3'>
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					className=' relative flex justify-center items-center p-1 size-14 bg-ownOrange-800 rounded-full duration-300 overflow-hidden cursor-pointer  group'
					aria-label='poprzedni'>
					<div className='relative size-10'>
						<Image
							src={arrowLeft}
							alt=''
							className='absolute top-0 left-0 w-full h-full transition-transform duration-300 group-hover:-translate-x-[200%] '
						/>
						<Image
							src={arrowLeft}
							alt=''
							className='absolute top-0 left-0 w-full h-full translate-x-[200%] transition-transform duration-300 group-hover:translate-x-0'
						/>
					</div>
				</button>

				<div className='   flex justify-center items-center text-2xl text-font-light  font-medium '>
					{currentSlide}/{totalSlides}
				</div>

				<button
					onClick={() => swiperRef.current?.slidePrev()}
					className=' relative flex justify-center items-center p-1 size-14 bg-ownOrange-800 rounded-full duration-300 overflow-hidden cursor-pointer  group'
					aria-label='poprzedni'>
					<div className='relative size-10'>
						<Image
							src={arrowRight}
							alt=''
							className='absolute top-0 left-0 w-full h-full transition-transform duration-300 group-hover:translate-x-[200%] '
						/>
						<Image
							src={arrowRight}
							alt=''
							className='absolute top-0 left-0 w-full h-full -translate-x-[200%] transition-transform duration-300 group-hover:translate-x-0'
						/>
					</div>
				</button>
			</div>
		</div>
	)
}

export default ButtonsFraction
