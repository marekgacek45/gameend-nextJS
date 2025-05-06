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

export const getAllGames = async () =>
	await directus.request<Game[]>(
		readItems('games', {
			fields: ['*'],
		})
	)

	export const getCurrentGame = async () => {
		const games = await directus.request<Game[]>(
			readItems('games', {
				filter: { currently_played: { _eq: true } },
				fields: ['*'],
				limit: 1,
			})
		);
		return games[0]; 
	};

	export const getNextGame = async () => {
		const games = await directus.request<Game[]>(
			readItems('games', {
				filter: { next_to_play: { _eq: true } },
				fields: ['*'],
				limit: 1,
			})
		);
		return games[0]; 
	};