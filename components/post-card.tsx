import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import arrowRight from '@/public/icons/arrow-right.svg'

import dummyImage from '@/public/assets/review.jpg'

// const PostCard = ({ post: { id, title, slug, date_created,description,thumbnail,type } }) => {
const PostCard = ({ post }) => {
	

	const categories = post.categories.map(category => {
		return category.post_categories_id
	})

	

	return (
		<div className='relative rounded-lg'>
			<div className='absolute inset-0  bg-black rounded-lg -z-10'></div>

			<Link
				href={`/blog/${post.slug}`}
				className='group relative z-10 block border-2 border-black rounded-lg hover:-translate-y-1 hover:translate-x-1 duration-300 bg-white'>
				<div className='p-3 flex flex-col justify-start items-start gap-3  '>
					<Image
						src={`${process.env.DIRECTUS_API_ENDPOINT}/assets/${post.thumbnail}`}
						alt={post.title}
						width={350}
						height={200}
						className='border-2 border-black rounded-lg w-full max-h-[200px] object-cover object-center'
					/>

					<div className='border-2 bg-yellow-300 px-4 py-1 rounded-sm'>
						<span className='uppercase font-accent text-xs'>{post.type.title}</span>
					</div>
					<span className='text-sm font-medium uppercase'>
						{new Date(post.date_created).toLocaleDateString('pl-PL', {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						})}
					</span>
					<h3 className='line-clamp-2 font-heading text-2xl leading-8 uppercase font-medium'>{post.title}</h3>
					<p className='line-clamp-4 text-sm'>{post.description}</p>
				</div>

				<div className='flex justify-between items-center border-t-2 border-black w-full  rounded-b-lg'>
					<div className='flex flex-wrap justify-start items-center gap-2 p-3'>
						{categories.slice(0, 2).map(category => (
							<div key={category.slug} className='border-2 bg-yellow-300 px-2 rounded-sm'>
								<span className='uppercase font-accent text-[10px]'>{category.title}</span>
							</div>
						))}
						{categories.length > 2 && (
							<div className='border-2 bg-yellow-300 px-2 rounded-sm'>
								<span className='uppercase font-accent text-[10px]'>+{categories.length - 2}</span>
							</div>
						)}
					</div>
					<div className='border-l-2 overflow-hidden relative group h-full p-7'>
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
