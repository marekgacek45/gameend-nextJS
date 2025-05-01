import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
	preheading: string
	heading: string
	link?: string
}

const Heading = ({ preheading, heading, link }: Props) => {
	return (
		<div className='flex justify-between'>
			<div className='flex flex-col gap-6'>
				<span className='uppercase font-semibold font-accent'>({preheading})</span>
				<h2 className='text-5xl font-heading font-black uppercase text'>{heading}</h2>
			</div>

			{link && (
				<Link
					className='font-heading font-medium self-end flex justify-center items-center gap-2 text-xl relative w-fit pb-1 after:block after:absolute after:h-[3px] after:bg-primary-400 after:w-full after:bottom-0 after:mt-2 after:scale-x-100 hover:after:scale-x-0 after:transition after:duration-300 after:origin-right uppercase group'
					href={link}>
					<Image
						src='/icons/arrow-right.svg'
						alt=''
						width={32}
						height={32}
						className='group-hover:-rotate-45 duration-300 size-8'
					/>
					Zobacz wszystkie
				</Link>
			)}
		</div>
	)
}

export default Heading
