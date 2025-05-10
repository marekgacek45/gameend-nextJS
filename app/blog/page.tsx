import Categories from '@/components/home/categories'
import Pagination from '@/components/pagination'
import PostsSection from '@/components/posts-section'
import directus from '@/lib/directus'
import { getPosts } from '@/lib/queries'
import { aggregate } from '@directus/sdk'
import React from 'react'

const Blog = async ({ searchParams }) => {
	const page = parseInt(searchParams.page) || 1
	const limit = 1
	const offset = (page - 1) * limit

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
		limit,
		offset,
	})

	const getTotalPropertiesCount = async () => {
		const groupedCounts = await directus.request(
			aggregate('posts', {
				aggregate: { count: '*' },
				groupBy: ['status'],
			})
		)

		const publishedGroup = groupedCounts.find(g => g.status === 'published')
		return publishedGroup?.count || 0
	}

	const totalCount = await getTotalPropertiesCount()
	const totalPages = Math.ceil(totalCount / limit)

	console.log('totalCount', totalCount)
	console.log('totalPages', totalPages)

	return (
		<>
			{/* finished */}
			<PostsSection
				preheading='giereczki'
				heading='Najnowsze recenzje'
				
				posts={posts}
				color='!pt-0'
				cardColor='bg-white'
			/>

  <Pagination currentPage={page} totalPages={totalPages} />

			{/* finished */}
			<Categories />
		</>
	)
}

export default Blog
