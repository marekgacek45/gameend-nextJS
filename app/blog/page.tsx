//finished

import { getPosts } from '@/lib/queries'

import PostsSection from '@/components/posts-section'
import Pagination from '@/components/pagination'
import Categories from '@/components/home/categories'
import { Metadata } from 'next'
import config from '@/lib/config'
import ROUTES from '@/lib/routes'

type Props = {
	searchParams: { page: string }
}

export const metadata: Metadata = {
	title: 'wszystkie wpisy',
	description: config.metadata.description,
	
	alternates: {
		canonical: config.env.productionUrl + ROUTES.blog.index,
	},
	openGraph: {
		title: 'blog | ' + config.metadata.title,
		description: config.metadata.description,
		type: 'website',
		locale: 'pl_PL',
		url:  config.env.productionUrl + ROUTES.blog.index,
		siteName: config.metadata.title,
	},
}

const Blog = async ({ searchParams }: Props) => {
	const page = parseInt(searchParams.page) || 1
	const limit = 12
	const offset = (page - 1) * limit

	const postCount = await getPosts({
		filter: { status: { _eq: 'published' } },
		fields: ['id'],
	})

	const posts = await getPosts({
		filter: { status: { _eq: 'published' } },
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
		sort: ['-date_created'],
		limit,
		offset,
	})

	const totalCount = await postCount.length
	const totalPages = Math.ceil(totalCount / limit)

	return (
		<>
			{/* finished */}
			<PostsSection preheading='giereczki' heading='Wszystkie wpisy' posts={posts} color='!pt-0' cardColor='bg-white' />

			{/* finished */}
			<Pagination currentPage={page} totalPages={totalPages} />

			{/* finished */}
			<Categories />
		</>
	)
}

export default Blog
