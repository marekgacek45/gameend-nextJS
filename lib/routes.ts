const ROUTES = {
	home: '/',
	blog: {
		index: '/blog',
		post: (postTypeSlug: string, slug: string) => `/blog/${postTypeSlug}/${slug}`,
		category: (slug: string) => `/blog/kategoria/${slug}`,
		type: (slug: string) => `/blog/${slug}`,
	},
	vinted: 'https://www.vinted.pl/member/99491818',
	olx: 'https://www.olx.pl/oferty/user/2Mdl13/',
	youTube: "https://www.youtube.com/@gameendMaxPower",
	facebook: "https://www.facebook.com/gameendMaxPower/"
} as const

export default ROUTES
