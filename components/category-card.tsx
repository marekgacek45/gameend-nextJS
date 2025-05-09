//finished

import Image from 'next/image'
import Link from 'next/link'


import arrowRight from '@/public/assets/icons/arrow-right--dark.svg'
import arrowRightWhite from '@/public/assets/icons/arrow-right.svg'

type Props = {
	link: string
	title: string
	cardColor: string
	btnColor: string
	lightArrow?: boolean
}

const CategoryCard = ({ link, title, cardColor, btnColor, lightArrow }: Props) => {
	return (
		<div
			className={`flex flex-col  justify-between items-center gap-8  py-16 text-center custom-border px-2  ${cardColor}`}>
			<h2 className='font-accent text-3xl 2xl:text-5xl  font-medium'>{title}</h2>
			<Link
				href={link}
				className={`flex justify-center items-center gap-2 p-3 px-8 border-3 rounded-md border-black   uppercase font-medium group overflow-hidden ${btnColor}`}>
				<Image
					src={lightArrow ? arrowRightWhite : arrowRight}
					alt=''
					className='  size-6 -translate-x-[250%] group-hover:translate-x-0 duration-300'
				/>

				<span>Zobacz</span>
				<Image
					src={lightArrow ? arrowRightWhite : arrowRight}
					alt=''
					className=' size-6   group-hover:translate-x-[250%] duration-300'
				/>
			</Link>
		</div>
	)
}

export default CategoryCard
