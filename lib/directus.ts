import { createDirectus, rest } from '@directus/sdk';

import config from '@/lib/config';

const directus = createDirectus(config.env.directusEndpoint).with(
    rest({
        onRequest: options => ({ ...options, cache: 'no-store' }),
    })
)

export default directus