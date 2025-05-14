{
	/* finished */
}

import { notFound } from 'next/navigation'

import { getPosts } from '@/lib/queries'

import PostsSection from '@/components/posts-section'
import Pagination from '@/components/pagination'
import Categories from '@/components/home/categories'

type Props = {
	params: { postCategorySlug: string; page: string }
	searchParams: { page: string }
}

const Page = async ({ searchParams, params }: Props) => {
	const postCategorySlug = params.postCategorySlug
	const page = parseInt(searchParams.page) || 1
	const limit = 1
	const offset = (page - 1) * limit

	const postCount = await getPosts({
		filter: {
			status: { _eq: 'published' },
			categories: {
				post_categories_id: {
					slug: { _eq: postCategorySlug },
				},
			},
		},
		fields: ['id'],
	})

	if (postCount.length === 0) {
		return notFound()
	}

	const posts = await getPosts({
		filter: {
			status: { _eq: 'published' },
			categories: {
				post_categories_id: {
					slug: { _eq: postCategorySlug },
				},
			},
		},
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

	const totalCount = postCount.length
	const totalPages = Math.ceil(totalCount / limit)

	console.log('TotalCOunt', totalCount)

	return (
		<>
			{/* finished */}
			<PostsSection
				preheading='gameend'
				heading={`Kategoria: ${postCategorySlug}`}
				posts={posts}
				color='!pt-0'
				cardColor='bg-white'
			/>

			{/* finished */}
			<Pagination currentPage={page} totalPages={totalPages} />

			{/* finished */}
			<Categories />
		</>
	)
}

export default Page
