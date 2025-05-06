const ROUTES = {
	home: '/',
    blog: {
        index: '/blog',
        post: (slug: string) => `/blog/${slug}`,
    }

} as const

export default ROUTES