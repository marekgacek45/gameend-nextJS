import { getAllPosts, getCurrentGame, getNextGame } from '@/lib/queries'

import Features from '@/components/home/features'
import PostsSection from '@/components/posts-section'
import Ribbon from '@/components/ribbon'
import PostsSectionSecondary from '@/components/posts-section-secondary'
import Link from 'next/link'
import Image from 'next/image'
import arrowRightIcon from '@/public/assets/icons/arrow-right--dark.svg'
import LatestPosts from '@/components/home/latest-posts'
const Home = async () => {
	const currentGame = await getCurrentGame()

	const nextGame = await getNextGame()

	const posts = await getAllPosts()

	const featuredPosts = posts.filter(post => post.featured).slice(0, 6)

	const latestPosts = posts.slice(0, 5)

	const reviews = posts.filter(post => post.type?.slug === 'recenzja').slice(0, 5)

	// const articles = posts.filter(post => post.type?.slug === 'artykul' && post.featured).slice(0, 2)
	const articles = posts.filter(post => post.type?.slug === 'artykul').slice(0, 2)

	const playStationPosts = posts.filter(post =>
		post.categories.some(cat => cat.post_categories_id.slug === 'play-station')
	)
	const nintendoPosts = posts.filter(post => post.categories.some(cat => cat.post_categories_id.slug === 'nintendo'))

	return (
		<>
			{/* finished */}
			<Features posts={featuredPosts} currentGame={currentGame} nextGame={nextGame} />
			{/* finished */}
			<Ribbon textFirst='blog' textSecond='gameend' />

			{/* finished */}
			<LatestPosts preheading='zawsze coś ciekawego' heading='Najświeższe posty' posts={latestPosts} />

			<PostsSectionSecondary preheading='coś ciekawego' heading='Polecane artykuły' posts={articles} />

			<PostsSection preheading='Nintendo' heading='Najnowsze recenzje' link='#' posts={reviews} />
			<PostsSection preheading='PlayStation' heading='Najnowsze recenzje' link='#' posts={reviews} />

			<section className='max-w-screen-max mx-auto px-8 py-20'>
				<div className='grid grid-cols-3 gap-12'>
					<div className='bg-ownOrange-400 border-2 border-black rounded-lg flex flex-col gap-6 justify-center items-center text-center py-16'>
						<h2 className='font-accent text-5xl  font-bold'>Nintendo</h2>
						<Link
							href='#'
							className=' flex justify-center items-center gap-2 p-3 px-8 border-3 rounded-md border-black bg-ownOrange-800  uppercase font-medium group overflow-hidden'>
							<Image
								src={arrowRightIcon}
								alt=''
								className='  size-6 -translate-x-[250%] group-hover:translate-x-0 duration-300'
							/>

							<span>Zacznij czytanie</span>
							<Image src={arrowRightIcon} alt='' className=' size-6   group-hover:translate-x-[250%] duration-300' />
						</Link>
					</div>
					<div className='bg-ownOrange-400 border-2 border-black rounded-lg flex flex-col gap-6 justify-center items-center text-center py-16'>
						<h2 className='font-accent text-5xl  font-bold'>PlayStation</h2>
						<Link
							href='#'
							className=' flex justify-center items-center gap-2 p-3 px-8 border-3 rounded-md border-black bg-ownOrange-800  uppercase font-medium group overflow-hidden'>
							<Image
								src={arrowRightIcon}
								alt=''
								className='  size-6 -translate-x-[250%] group-hover:translate-x-0 duration-300'
							/>

							<span>Zacznij czytanie</span>
							<Image src={arrowRightIcon} alt='' className=' size-6   group-hover:translate-x-[250%] duration-300' />
						</Link>
					</div>
					<div className='bg-ownOrange-400 border-2 border-black rounded-lg flex flex-col gap-6 justify-center items-center text-center py-16'>
						<h2 className='font-accent text-5xl font-bold'>Artykuły</h2>
						<Link
							href='#'
							className=' flex justify-center items-center gap-2 p-3 px-8 border-3 rounded-md border-black bg-ownOrange-800  uppercase font-medium group overflow-hidden'>
							<Image
								src={arrowRightIcon}
								alt=''
								className='  size-6 -translate-x-[250%] group-hover:translate-x-0 duration-300'
							/>

							<span>Zacznij czytanie</span>
							<Image src={arrowRightIcon} alt='' className=' size-6   group-hover:translate-x-[250%] duration-300' />
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
