//finished

import { cn } from '@/lib/utils'

import Marquee from 'react-fast-marquee'

const Ribbon = ({
	textFirst,
	textSecond,
	textThird,
	textFourth,
	className,
	speed,
}: {
	textFirst: string
	textSecond: string
	textThird?: string
	textFourth?: string
	className?: string
	speed?: number
}) => {
	return (
		<Marquee
			autoFill
			speed={speed}
			className={`${cn('mt-6 md:mt-12  py-2 bg-[#D9D5CA]   border-y-3 border-black overflow-hidden ', className)}`}>
			<div className='flex  items-center justify-center gap-4 mr-4'>
				<span className='text-5xl md:text-6xl font-heading font-bold uppercase text'>• {textFirst} •</span>
				<span
					className='mt-1 text-4xl md:text-5xl font-accent font-medium uppercase text-ownPurple-400  tracking-tight'>
					{textSecond}
				</span>
				{textThird &&<span className='text-5xl md:text-6xl font-heading font-bold uppercase text'>• {textThird} •</span>}
					{textFourth &&<span
					className='mt-1 text-4xl md:text-5xl font-accent font-medium uppercase text-ownPurple-400  tracking-tight'>
					{textFourth}
				</span>}
			</div>
		</Marquee>
	)
}

export default Ribbon
