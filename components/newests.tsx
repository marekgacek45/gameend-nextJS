import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Heading from './heading'
import { formatDate, getAssetUrl } from '@/lib/utils'
import Badge from './badge'

import dummyImage from '@/public/assets/review.jpg'
import PostCard from './post-card'
import PostCardThird from './post-card-third'

type Props = {
	preheading: string
	heading: string
	link?: string
	posts: Post[]
}

const Newests = ({ preheading, heading, posts }: Props) => {
	const firstPost = posts[0]

	return (
		<section className='max-w-screen-max mx-auto px-8 py-20 '>
			<div className='space-y-12'>
				<Heading preheading={preheading} heading={heading} />

				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
					<div className='col-span-3 group relative z-10  group '>
						<Image
							src={getAssetUrl(firstPost.thumbnail)}
							alt={firstPost.title}
							width={350}
							height={700}
							className='border-2 border-black rounded-lg w-full max-h-[450px] object-cover object-center'
						/>

						<div className='relative'>
							
                        <div className='absolute inset-0  bg-black rounded-lg -z-10'></div>
                            
<div className=' p-2 border-2 border-black rounded-lg mt-4 flex justify-start items-center gap-6 group-hover:-translate-y-1 group-hover:translate-x-1  duration-300 bg-white  '>


                            <div>
								<Badge title={firstPost.type.title} />
							</div>

							<div >

                          

								<h3 className='font-heading text-2xl  uppercase'>{firstPost.title}</h3>
								<span className='text-sm font-medium uppercase'>{formatDate(firstPost.date_created)}</span>
							</div>
</div>
						</div>
					</div>

					<div className='h-full border-2 border-black rounded-lg'>
						<Image src={dummyImage} alt='' className='h-full object-cover object-center' />
					</div>

					{posts.slice(1,5).map(post => (
						<PostCardThird key={post.slug} post={post} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Newests
