'use client'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import gameOver from '@/public/assets/gameover.gif'

import arrowRight from '@/public/assets/icons/arrow-right--dark.svg'

const NotFound = () => {
	const router = useRouter()

	return (
		<section className='min-h-[50vh] pb-20 -mt-12 px-6 bg-black flex flex-col justify-center items-center'>
			<Image src={gameOver} alt='gameover' width={800} height={400} />

			<button
				onClick={() => router.back()}
				className={`flex justify-center items-center gap-2 p-3 px-8 bg-white border-3 rounded-md border-black    uppercase font-medium group overflow-hidden cursor-pointer `}>
				<Image
					src={arrowRight}
					alt=''
					className='  size-6 group-hover:-translate-x-[250%]  duration-300 rotate-180'
				/>

				<span>powrót</span>
				<Image
					src={ arrowRight}
					alt=''
					className=' size-6   translate-x-[250%] group-hover:-translate-x-0 duration-300 rotate-180'
				/>
			</button>
		</section>
	)
}

export default NotFound
