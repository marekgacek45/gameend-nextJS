import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import arrowRight from '@/public/icons/arrow-right.svg'
import PostCard from '../post-card'

import { createDirectus, readItems, rest } from '@directus/sdk'

export const revalidate = 60

interface Post {
	id: number
	title: string
	content: string
}

interface Schema {
	posts: Post[]
}

const directus = createDirectus<Schema>(process.env.DIRECTUS_API_ENDPOINT!).with(rest())

const posts = await directus.request(
	readItems('posts', {
		filter: { status: { _eq: 'published' } },
		sort: ['-date_created'],
		fields: ['id', 'title', 'date_created','slug','description','thumbnail','type.*','categories.*','categories.post_categories_id.title','categories.post_categories_id.slug'],
		// fields: ['*'],
		limit: 4,
	})
)

console.log(posts)

const Reviews = () => {
	return (
		<section className='max-w-screen-max mx-auto px-8 py-10'>
			<div className='space-y-12'>
				<div className='flex justify-between'>
					<div className='flex flex-col gap-6'>
						<span className='uppercase  font-semibold font-accent'>(Reviews)</span>

						<h2 className='text-5xl font-heading font-black uppercase'>Find your sound</h2>
					</div>

					<Link
						className='font-heading font-medium self-end flex justify-center items-center gap-2 text-xl
                      relative w-fit pb-1 
                      after:block after:absolute after:h-[3px] after:bg-primary-400 after:w-full 
                      after:bottom-0 after:mt-2 after:scale-x-100 hover:after:scale-x-0 
                      after:transition after:duration-300 after:origin-right uppercase
                      group'
						href='#'>
						<Image src={arrowRight} alt='' className='group-hover:-rotate-45 duration-300 size-8' />
						View all shows
					</Link>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
					{posts.map(post => (
						<PostCard key={post.id} post={post} />
					))}

					{/* <PostCard/> */}
					{/* <PostCard/>
					<PostCard/>
					<PostCard/> */}
				</div>
			</div>
		</section>
	)
}

export default Reviews
