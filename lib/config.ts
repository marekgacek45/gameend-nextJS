const config = {
	env: {
		directusEndpoint: process.env.NEXT_PUBLIC_DIRECTUS_API_ENDPOINT!,
		productionUrl: process.env.NEXT_PUBLIC_PRODUCTION_URL!,
	},
    metadata:{
        title: 'gameend - blog o grach',
		description: 'Blog o grach na  nintendo i playstation. Nie ma co więcej nawijać makaronu na uszy :)',
    }
}

export default config
