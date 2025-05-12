//finished

import { Post } from '@/types'

import PostCard from '@/components/postCard/post-card'
import Heading from '@/components/heading'

type Props = {
	preheading: string
	heading: string
	link?: string
	posts: Post[]
	color?: string
	lightArrow?: boolean
	cardColor?: string
}

const PostsSection = async ({ preheading, heading, link, posts, color, lightArrow, cardColor }: Props) => {
	return (
		<section className={`max-w-screen-max mx-auto px-8 py-20 ${color}`}>
			<div className='space-y-12'>
				<Heading preheading={preheading} heading={heading} link={link} lightArrow={lightArrow} />

				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
					{posts.map(post => (
						<PostCard key={post.slug} post={post} color={cardColor} />
					))}
				</div>
			</div>
		</section>
	)
}

export default PostsSection
