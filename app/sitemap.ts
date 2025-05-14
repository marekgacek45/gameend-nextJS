import config from '@/lib/config'
import { getPostCategories, getPosts, getPostTypes } from '@/lib/queries'
import ROUTES from '@/lib/routes'
import { Post, PostCategory, PostType } from '@/types'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const siteUrl = config.env.productionUrl

	const postTypes: PostType[] = await getPostTypes()

	const postTypesUrls = postTypes.map((type: PostType) => ({
		url: `${siteUrl}${ROUTES.blog.type(type.slug)}`,
		lastModified: new Date(),
		priority: 0.8,
	}))

	const postCategories: PostCategory[] = await getPostCategories()

	const postCategoriesUrls = postCategories.map((category: PostCategory) => ({
		url: `${siteUrl}${ROUTES.blog.category(category.slug)}`,
		lastModified: new Date(),
		priority: 0.7,
	}))

	const posts: Post[] = await getPosts({
		filter: { status: { _eq: 'published' } },
		fields: ['slug', 'type.slug'],
	})

	const postsUrls = posts.map((post: Post) => ({
		url: `${siteUrl}${ROUTES.blog.post(post.type.slug, post.slug)}`,
		lastModified: new Date(),
		priority: 0.6,
	}))

	return [
		{
			url: `${siteUrl}`,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${siteUrl}${ROUTES.blog.index}`,
			lastModified: new Date(),
			priority: 0.9,
		},
		...postTypesUrls,
		...postCategoriesUrls,
		...postsUrls,
	]
}
