import { Game, Post } from '@/types'
import type { Filter } from '@directus/types';

import directus from '@/lib/directus'
import { readItems} from '@directus/sdk';



type GetPostsParams = {
	filter?: Filter;
	limit?: number;
	fields?: (keyof Post | string)[];
  };
	  
	  export const getPosts = async ({ filter = {}, limit, fields }: GetPostsParams = {}) => {
		return await directus.request<Post[]>(
		  readItems('posts', {
			filter: {
			  _and: [
				{ status: { _eq: 'published' } },
				filter,
			  ],
			},
			sort: ['-date_created'],
			fields,
			limit,
		  })
		);
	  };



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
