//finished

'use client'

import { Game, Post } from '@/types'

import { SwiperSlide } from 'swiper/react'

import GameCard from '@/components/home/hero/game-card'
import FeaturedPost from '@/components/home/hero/featured-post'
import FeaturedPostsCarousel from '@/components/home/hero/featured-posts-carousel'

const Features = ({ posts, currentGame, nextGame }: { posts: Post[]; currentGame: Game; nextGame: Game }) => {
	return (
		<section className='flex flex-col xl:flex-row justify-between items-center gap-6 pb-6 px-6 w-full xl:h-[calc(100vh-128px)]'>
			<div className='flex flex-col sm:flex-row xl:flex-col gap-6 w-full xl:w-[33%] h-full order-1 xl:order-none'>
				<GameCard color='bg-purple-400' heading='Gramy' cover={currentGame.cover} title={currentGame.title} />
				<GameCard color='bg-ownYellow-400' heading='Następna' cover={nextGame.cover} title={nextGame.title} />
			</div>

			<FeaturedPostsCarousel>
				{posts.map((post: Post) => (
					<SwiperSlide key={post.slug}>
						<FeaturedPost post={post} />
					</SwiperSlide>
				))}
			</FeaturedPostsCarousel>
		</section>
	)
}

export default Features
