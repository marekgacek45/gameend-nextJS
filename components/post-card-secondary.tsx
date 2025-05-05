import { Post } from '@/types'

import Image from 'next/image'
import Link from 'next/link'

import { getAssetUrl } from '@/lib/utils'

import padIcon from '@/public/assets/icons/pad.svg'
import bookOpenIcon from '@/public/assets/icons/book-open.svg'

const PostCardSecondary = ({ post: { title, slug, description, thumbnail } }: { post: Post }) => {
	return (
		<div key={slug} className='z-10'>
			<Link href='#' className='relative group'>
				<Image
					src={getAssetUrl(thumbnail)}
					alt={title}
					width={500}
					height={500}
					className='w-full border-2 border-white rounded-lg  aspect-square object-cover object-center'
				/>

				<div className=' absolute bottom-4 lg:bottom-8 right-4 lg:right-8 z-10 border-3 rounded-md border-black bg-ownOrange-800 p-3 group-hover:bg-ownYellow-400 duration-300'>
					<Image src={padIcon} alt='' width={32} height={32} />
				</div>
			</Link>

			<div className='mt-6 space-y-4 '>
				<h3 className='uppercase font-heading text-2xl font-medium '>{title}</h3>
				<span className='line-clamp-1 font-light'>{description}</span>
				<Link
					href='#'
					className='flex  gap-2  border-b-2 justify-start items-start w-fit pb-1 hover:border-ownOrange-800'>
					<Image src={bookOpenIcon} alt='' width={24} height={24} />
					<span className='uppercase font-semibold'>Przeczytaj</span>
				</Link>
			</div>
		</div>
	)
}

export default PostCardSecondary
