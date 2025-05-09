// finished

'use client'

import Image from 'next/image'

import ArrowUp from 'pixelarticons/svg/arrow-up.svg'

const ScrollToTop = () => {
	const scroll = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<button onClick={scroll} className='flex justify-center items-center gap-1 uppercase  cursor-pointer group'>
			back to top
			<div className='border rounded-full p-0.5'>
				<Image
					src={ArrowUp}
					alt=''
					width={20}
					height={20}
					className='size-5 group-hover:rotate-360 duration-1000'
				/>
			</div>
		</button>
	)
}

export default ScrollToTop
