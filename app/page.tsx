// finished

import { getCurrentGame, getNextGame, getPosts } from '@/lib/queries'

import Features from '@/components/home/features'
import Ribbon from '@/components/ribbon'
import LatestPosts from '@/components/home/latest-posts'
import Articles from '@/components/home/articles'
import PostsSection from '@/components/posts-section'
import Categories from '@/components/home/categories'
import ROUTES from '@/lib/routes'

const Home = async () => {
	const currentGame = await getCurrentGame()
	const nextGame = await getNextGame()

	const featuredPosts = await getPosts({
		filter: { status: { _eq: 'published' }, featured: { _eq: true } },
		fields: ['title', 'date_created', 'slug', 'thumbnail', 'description'],
		limit: 6,
	})

	const latestPosts = await getPosts({
		filter: { status: { _eq: 'published' } },
		fields: [
			'title',
			'date_created',
			'slug',
			'thumbnail',
			'type.*',
			'categories.*',
			'categories.post_categories_id.title',
			'categories.post_categories_id.slug',
		],
		limit: 5,
	})

	const articles = await getPosts({
		filter: { status: { _eq: 'published' }, type: { slug: { _eq: 'teksty' } } },
		fields: ['title', 'slug', 'thumbnail', 'description'],
		limit: 2,
	})

	const reviews = await getPosts({
		filter: { status: { _eq: 'published' }, type: { slug: { _eq: 'recenzje' } } },
		fields: [
			'title',
			'date_created',
			'slug',
			'description',
			'thumbnail',
			'featured',
			'type.*',
			'categories.*',
			'categories.post_categories_id.title',
			'categories.post_categories_id.slug',
		],
		limit: 4,
	})

	return (
		<>
			{/* finished */}
			<Features posts={featuredPosts} currentGame={currentGame} nextGame={nextGame} />
			{/* finished */}
			<Ribbon textFirst='blog' textSecond='gameend' />

			{/* finished */}
			<LatestPosts preheading='zawsze coś ciekawego' heading='Najświeższe posty' posts={latestPosts} />

			{/* finished */}
			<Articles preheading='"publicystyka"' heading='Polecane artykuły' posts={articles} />

			{/* finished */}
			<PostsSection
				preheading='giereczki'
				heading='Najnowsze recenzje'
				link={ROUTES.blog.category('recenzje')}
				posts={reviews}
				color=''
				cardColor='bg-white'
			/>
			{/* finished */}
			<Categories />
		</>
	)
}

export default Home
