import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import arrowRight from '@/public/icons/arrow-right.svg'

import { Post } from '@/types'
import { formatDate, getAssetUrl } from '@/lib/utils'
import Badge from './badge'

const PostCardThird = ({
	post: { title, slug, date_created, description, thumbnail, type, categories },
}: {
	post: Post
}) => {
	const postCategories = categories.map(category => {
		return category.post_categories_id
	})

	return (
		<div className='relative rounded-lg'>
			<div className='absolute inset-0  bg-black rounded-lg -z-10'></div>

			<Link
				href={`/blog/${slug}`}
				className='group relative z-10 block border-2 border-black rounded-lg hover:-translate-y-1 hover:translate-x-1 duration-300 bg-white'>
				<div className='p-3 flex flex-col justify-start items-start gap-3  '>
					<Image
						src={getAssetUrl(thumbnail)}
						alt={title}
						width={350}
						height={200}
						className='border-2 border-black rounded-lg w-full max-h-[250px] object-cover object-center'
					/>

					{postCategories.slice(0, 2).map(category => (
						<Badge key={category.slug} size={'small'} title={category.title} />
					))}
					{postCategories.length > 2 && <Badge size={'small'} title={`+${postCategories.length - 2}`} />}
					
					<h3 className='line-clamp-2 font-heading text-2xl leading-8 uppercase font-medium min-h-[64px]'>{title}</h3>
				<span className='text-sm font-medium uppercase'>{formatDate(date_created)}</span>
				</div>

			</Link>
		</div>
	)
}

export default PostCardThird
