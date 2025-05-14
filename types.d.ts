export interface Post {
	id: string
	title: string
	slug: string
	description: string
	thumbnail: string
	featured: boolean
	date_created: string
	content: string
	type: PostType
	categories: PostCategory[]
}

export interface PostType {
	id: string
	title: string
	slug: string
}

export interface PostCategory {
	id: string
	title: string
	slug: string
	post_categories_id: {
		id: string
		title: string
		slug: string
	}
}

export interface Game {
	currently_played: boolean
	next_to_play: boolean
	cover: string
	title: string
	platform: string
}
