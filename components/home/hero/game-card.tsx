//finished

import { getAssetUrl } from '@/lib/utils'

import Image from 'next/image'

type Props = {
	color: string
	heading: string
	cover: string
	title: string
}

const GameCard = ({ color, heading, cover, title }: Props) => {
	return (
		<div className='relative xl:h-[49%]'>
			<div className='absolute inset-0 bg-black rounded-lg' />

			<div
				className={`relative flex flex-col w-full h-full custom-border ${color} hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300`}>
				<div className='p-3 border-b-3 border-black'>
					<h2 className='text-3xl font-accent uppercase'>{heading}</h2>
				</div>
				<div className='flex flex-grow p-3 border-b-3 border-black'>
					<Image
						src={getAssetUrl(cover)}
						alt={title}
						width={400}
						height={200}
						className='h-full w-full rounded-lg object-cover object-center xl:max-h-[218px]'
						sizes="(min-width: 1290px) 400px, (min-width: 1024px) 600px, 100vw"
						priority
					/>
				</div>
				<div className='flex justify-between items-center p-3 group'>
					<h3 className='text-2xl font-heading font-medium uppercase line-clamp-1'>{title}</h3>
				</div>
			</div>
		</div>
	)
}

export default GameCard
