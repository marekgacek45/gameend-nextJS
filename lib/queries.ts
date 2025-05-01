import { Post } from '@/types'

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export const getAllPosts = async () =>
	await directus.request<Post[]>(
		readItems('posts', {
			filter: { status: { _eq: 'published' } },
			sort: ['-date_created'],
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
		})
	)
