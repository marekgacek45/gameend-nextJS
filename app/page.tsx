import Features from '@/components/home/features'
import PostsSection from '@/components/posts-section'
import Ribbon from '@/components/ribbon'
import { getAllPosts } from '@/lib/queries'

const Home = async () => {
	const posts = await getAllPosts()
	const reviews = posts.filter(post => post.type?.slug === 'recenzja').slice(0, 4)

	const retroPosts = posts.filter(post => post.categories.some(cat => cat.post_categories_id.slug === 'retro'))

	console.log('retroPosts', retroPosts)

	return (
		<>
			<Features />

			<Ribbon textFirst='The Sound' textSecond='alternative' />

			<PostsSection preheading='Recenzje' heading='Najnowsze recenzje' link='#' posts={reviews} />

			<div className='relative mt-12 tex'>
				<div className='absolute inset-0 '>
					<Ribbon
						speed={50}
						textFirst='The Sound'
						textSecond='alternative'
						className='rotate-[2deg] py-1 bg-black text-white'
					/>
				</div>
				<div className='absolute inset-0'>
					<Ribbon speed={15} textFirst='The Sound' textSecond='alternative' className='rotate-[-2deg] py-1 ' />
				</div>
			</div>
		</>
	)
}

export default Home
