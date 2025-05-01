import { getAllPosts } from '@/lib/queries'


import Features from '@/components/home/features'
import PostsSection from '@/components/posts-section'
import Ribbon from '@/components/ribbon'
import PostsSectionSecondary from '@/components/posts-section-secondary'

const Home = async () => {
	const posts = await getAllPosts()

	// const featuredPosts = posts.filter(post => post.featured).slice(0, 6)

	const reviews = posts.filter(post => post.type?.slug === 'recenzja').slice(0, 4)

	// const articles = posts.filter(post => post.type?.slug === 'artykul' && post.featured).slice(0, 2)
	const articles = posts.filter(post => post.type?.slug === 'artykul' ).slice(0, 2)

	// const playStationPosts = posts.filter(post => post.categories.some(cat => cat.post_categories_id.slug === 'play-station'))
	// const nintendoPosts = posts.filter(post => post.categories.some(cat => cat.post_categories_id.slug === 'nintendo'))

	
	console.log(articles)

	return (
		<>
			<Features />

			<Ribbon textFirst='The Sound' textSecond='alternative' />

			<PostsSection preheading='Recenzje' heading='Najnowsze recenzje' link='#' posts={reviews} />


			<PostsSectionSecondary preheading='Artykuły' heading='Polecane artykuły'  posts={articles} /> 
		</>
	)
}

export default Home
