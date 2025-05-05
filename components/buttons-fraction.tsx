import { cn } from '@/lib/utils'
import { ChevronRight, ChevronLeft } from 'lucide-react'
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

		// Ustawienie początkowej liczby slajdów
		setTotalSlides(swiper.slides.length)

		// Aktualizacja numeru slajdu przy zmianie
		const updateSlideNumber = () => {
			setCurrentSlide(swiper.realIndex + 1) // realIndex zaczyna się od 0
			setTotalSlides(swiper.slides.length)
		}

		swiper.on('slideChange', updateSlideNumber)

		// Cleanup eventu
		return () => {
			swiper.off('slideChange', updateSlideNumber)
		}
	}, [swiperRef])

	return (
		<div className={`${cn('', className)} `}>
			

			<div className='flex justify-between items-center gap-3'>

           

				<button
					onClick={() => swiperRef.current?.slidePrev()}
					className='bg-red-500 rounded-full p-1 group-hover:-rotate-45 duration-300 size-12 flex justify-center items-center cursor-pointer'
					aria-label='poprzedni'>
					<div className=' '>
						<Image src={arrowLeft} alt='' />
					</div>
				</button>

                <div className='   flex justify-center items-center text-white font-medium'>
				{currentSlide}/{totalSlides}
			</div>

				<button
					onClick={() => swiperRef.current?.slideNext()}
					className='bg-red-500 rounded-full p-1 group-hover:-rotate-45 duration-300 size-12 flex justify-center items-center cursor-pointer'
					aria-label='następny'>
				<Image src={arrowRight} alt='' />
				</button>
			</div>
		</div>
	)
}

export default ButtonsFraction
