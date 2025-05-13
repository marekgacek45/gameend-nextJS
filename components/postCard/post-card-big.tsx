//finished

import { formatDate, getAssetUrl } from '@/lib/utils'
import ROUTES from '@/lib/routes'

import Image from 'next/image'
import Link from 'next/link'

import Badge from '@/components/badge'

type Props = {
	slug:string
	thumbnail: string
	title: string
	type: {
		title: string
		slug: string
	}
	date_created: string
}

const PostCardBig = ({ post: { slug,thumbnail, title, type, date_created } }: { post: Props }) => {
	return (
		<Link href={ROUTES.blog.post(type.slug, slug)} className='lg:col-span-3 relative z-10  group '>
			<Image
				src={getAssetUrl(thumbnail)}
				alt={title}
				width={1200}
				height={450}
				className=' w-full max-h-[450px] object-cover object-center custom-border'
			/>

			<div className='relative'>
				<div className='absolute inset-0  bg-black rounded-lg -z-10'></div>

				<div className=' flex justify-start items-center gap-6  p-2  mt-4 bg-white group-hover:-translate-y-1 group-hover:translate-x-1  duration-300  custom-border'>
					<div>
						<Badge title={type.title} />
					</div>

					<div>
						<h3 className='text-2xl font-heading  font-medium uppercase'>{title}</h3>
						<span className='text-sm font-medium uppercase'>{formatDate(date_created)}</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default PostCardBig
