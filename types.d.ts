export interface Post  {
	id: string
	title: string
	slug: string
	description: string
	thumbnail: string
    featured: boolean
	date_created: string
	type: {
		id: string
		title: string
		slug: string
	}
	categories: {
		id: string
		title: string
		slug: string
		post_categories_id: {
			id: string
			title: string
			slug: string
		}
	}[]
}
