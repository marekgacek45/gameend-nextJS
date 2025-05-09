//update queries

import { getAllPosts, getCurrentGame, getNextGame } from '@/lib/queries'

import Features from '@/components/home/features'
import Ribbon from '@/components/ribbon'
import LatestPosts from '@/components/home/latest-posts'
import Articles from '@/components/home/articles'
import PostsSection from '@/components/posts-section'
import Categories from '@/components/home/categories'

const Home = async () => {
	const currentGame = await getCurrentGame()

	const nextGame = await getNextGame()

	const posts = await getAllPosts()

	const featuredPosts = posts.filter(post => post.featured).slice(0, 6)

	const latestPosts = posts.slice(0, 5)

	const articles = posts.filter(post => post.type?.slug === 'artykul').slice(0, 2)

	const reviews = posts.filter(post => post.type?.slug === 'recenzja').slice(0, 5)

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
				link='#'
				posts={reviews}
				color=''
				cardColor='bg-white'
			/>

			<Categories />
		</>
	)
}

export default Home
