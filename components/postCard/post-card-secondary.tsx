// finished

import { Post } from '@/types'

import ROUTES from '@/lib/routes'

import { getAssetUrl } from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'

import padIcon from '@/public/assets/icons/pad.svg'
import bookOpenIcon from '@/public/assets/icons/book-open.svg'

const PostCardSecondary = ({ post: { title, slug, description, thumbnail,type } }: { post: Post }) => {
	return (
		<div key={slug} className='z-10'>
			<Link href={ROUTES.blog.post(type.slug, slug)} className='relative group'>
				<Image
					src={getAssetUrl(thumbnail)}
					alt={title}
					width={500}
					height={500}
					className='w-full  aspect-square object-cover object-center custom-border !border-white'
				/>

				<div className=' absolute bottom-4 lg:bottom-8 right-4 lg:right-8  bg-ownOrange-800 p-3 group-hover:bg-ownYellow-400 duration-300 custom-border z-10 '>
					<Image src={padIcon} alt='' width={32} height={32} />
				</div>
			</Link>

			<div className='mt-6 space-y-4 '>
				<h3 className=' text-2xl font-heading font-medium uppercase  '>{title}</h3>
				<span className='font-light line-clamp-1'>{description}</span>
				<Link
					href={ROUTES.blog.post(type.slug, slug)}
					className='flex justify-start items-start w-fit gap-2 pb-1 border-b-2 hover:border-ownOrange-800'>
					<Image src={bookOpenIcon} alt='' width={24} height={24} />
					<span className='font-semibold uppercase '>Przeczytaj</span>
				</Link>
			</div>
		</div>
	)
}

export default PostCardSecondary
