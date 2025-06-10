const config = {
	env: {
		directusEndpoint: process.env.NEXT_PUBLIC_DIRECTUS_API_ENDPOINT!,
		productionUrl: process.env.NEXT_PUBLIC_PRODUCTION_URL!,
	},
    metadata:{
        title: 'gameend - nie tylko blog o grach',
		description: 'Blog o grach na  nintendo i playstation. Oprócz tego kanał na YouTube oraz sklepik z grami!',
    }
}

export default config
