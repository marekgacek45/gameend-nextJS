//finished

import { Post } from '@/types'

import ROUTES from '@/lib/routes'

import Image from 'next/image'

import Heading from '@/components/heading'
import PostCardBig from '../postCard/post-card-big'
import PostCardSmall from '../postCard/post-card-small'

import gif from '@/public/assets/dog.gif'

type Props = {
	preheading: string
	heading: string
	link?: string
	posts: Post[]
}

const LatestPosts = ({ preheading, heading, posts }: Props) => {
	const firstPost = posts[0]

	return (
		<section className='max-w-screen-max mx-auto px-4 md:px-8 py-10 md:py-20 '>
			<div className='space-y-12'>
				<Heading preheading={preheading} heading={heading} link={ROUTES.blog.index}/>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
					<PostCardBig post={firstPost} />

					<div className='h-full w-full custom-border'>
						<Image src={gif} alt='duck hunt' className='w-full h-full  object-cover object-center' />
					</div>

					{posts.slice(1, 5).map(post => (
						<PostCardSmall key={post.slug} post={post} />
					))}
				</div>
			</div>
		</section>
	)
}

export default LatestPosts
