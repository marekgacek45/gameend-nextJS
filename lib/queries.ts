import { Game, Post } from '@/types'
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
