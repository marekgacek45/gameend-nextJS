import { Game, Post, PostCategory, PostType } from '@/types'
import type { Filter } from '@directus/types'

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export interface ItemsQuery {
	filter?: Filter
	fields?: Array<string>
	limit?: number
	offset?: number
}

export const getPosts = async (options?: ItemsQuery) => {
	return await directus.request<Post[]>(readItems('posts', options))
}

export const getPostBySlug = async (slug: string) => {
	const filterPosts = await directus.request<Post[]>(
		readItems('posts', {
			filter: { slug: { _eq: slug } },

			fields: [
				'date_created',
				'title',
				'thumbnail',
				'description',
				'content',
				'type.*',
				'categories.*',
				'categories.post_categories_id.title',
				'categories.post_categories_id.slug',
			],
		})
	)

	return filterPosts[0]
}

export const getPostTypes = async () => {
	return await directus.request<PostType[]>(
		readItems('post_types', {
			fields: ['slug'],
		})
	)
}

export const getPostCategories = async () => {
	return await directus.request<PostCategory[]>(
		readItems('post_categories', {
			fields: ['slug'],
		})
	)
}

export const getCurrentGame = async () => {
	const games = await directus.request<Game[]>(
		readItems('games', {
			filter: { currently_played: { _eq: true } },
			fields: ['*'],
			limit: 1,
		})
	)
	return games[0]
}

export const getNextGame = async () => {
	const games = await directus.request<Game[]>(
		readItems('games', {
			filter: { next_to_play: { _eq: true } },
			fields: ['*'],
			limit: 1,
		})
	)
	return games[0]
}
