import { notFound } from 'next/navigation'
import { getPosts } from '@/lib/queries'

import Categories from '@/components/home/categories'
import Pagination from '@/components/pagination'
import PostsSection from '@/components/posts-section'

type Props = {
	params: { postTypeSlug: string; page: string }
	searchParams: { page: string }
}

const Page = async ({ searchParams, params }: Props) => {
	const postTypeSlug = params.postTypeSlug
	const page = parseInt(searchParams.page) || 1
	const limit = 12
	const offset = (page - 1) * limit

	const postCount = await getPosts({
		filter: { status: { _eq: 'published' }, type: { slug: { _eq: postTypeSlug } } },
		fields: ['id'],
	})

	if (postCount.length === 0) {
		return notFound()
	}

	const posts = await getPosts({
		filter: { status: { _eq: 'published' }, type: { slug: { _eq: postTypeSlug } } },
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

	return (
		<>
			{/* finished */}
			<PostsSection
				preheading='gameend'
				heading={`${postTypeSlug}`}
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

export default Page
