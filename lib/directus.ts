import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus(process.env.DIRECTUS_API_ENDPOINT!).with(
    rest({
        onRequest: options => ({ ...options, cache: 'no-store' }),
    })
)

export default directus