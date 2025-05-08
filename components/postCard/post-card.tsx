import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import arrowRight from '@/public/icons/arrow-right.svg'

import { Post } from '@/types'
import { formatDate, getAssetUrl } from '@/lib/utils'
import Badge from '@/components/badge'

const PostCard = ({ post: {  title, slug, date_created,description,thumbnail,type,categories },color } : {post: Post,color?:string}) => {
	

	const postCategories = categories.map(category => {
		return category.post_categories_id
	})

	

	return (
		<div className='relative rounded-lg text-font-dark'>
			
			<div className='absolute inset-0  bg-black rounded-lg z-10'></div>

			<Link
				href={`/blog/${slug}`}
				className={`group relative z-10 block custom-border hover:-translate-y-1 hover:translate-x-1 duration-300 ${color}`}>
				<div className='p-3 flex flex-col justify-start items-start gap-3  '>
					<Image
						src={getAssetUrl(thumbnail)}
						alt={title}
						width={350}
						height={250}
						className='custom-border w-full max-h-[250px] object-cover object-center'
					/>

					
					<Badge title={type.title} />
					<span className='text-sm font-medium uppercase'>
						{formatDate(date_created)}
					</span>
					<h3 className='line-clamp-2 font-heading text-2xl leading-8 uppercase font-medium min-h-[64px]'>{title}</h3>
					<p className='line-clamp-4 text-sm min-h-[80px]'>{description}</p>
				</div>

				<div className='flex justify-between items-center border-t-3 border-black w-full  rounded-b-lg'>
					<div className='flex flex-wrap justify-start items-center gap-2 p-3'>
						{postCategories.slice(0, 2).map(category => (
							
							<Badge key={category.slug} size={'small'} title={category.title} />
						))}
						{postCategories.length > 2 && (
							
							<Badge  size={'small'} title={`+${postCategories.length - 2}`} />
						)}
					</div>
					<div className='border-l-3 overflow-hidden relative group h-full p-7'>
						<Image
							src={arrowRight}
							alt=''
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[120%] duration-300 size-8'
						/>
						<Image
							src={arrowRight}
							alt=''
							className='absolute top-1/2 left-1/2 -translate-x-[200%] -translate-y-1/2 group-hover:-translate-x-1/2 duration-300 size-8'
						/>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default PostCard
