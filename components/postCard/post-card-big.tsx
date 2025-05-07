import { formatDate, getAssetUrl } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import Badge from '../badge'
import Link from 'next/link'
import ROUTES from '@/lib/routes'

type Props = {
	slug:string
	thumbnail: string
	title: string
	type: {
		title: string
	}
	date_created: string
}

const PostCardBig = ({ post: { slug,thumbnail, title, type, date_created } }: { post: Props }) => {
	return (
		<Link href={ROUTES.blog.post(slug)} className='lg:col-span-3 group relative z-10  group '>
			<Image
				src={getAssetUrl(thumbnail)}
				alt={title}
				width={1200}
				height={450}
				className=' w-full max-h-[450px] object-cover object-center custom-border'
			/>

			<div className='relative'>
				<div className='absolute inset-0  bg-black rounded-lg -z-10'></div>

				<div className=' p-2  mt-4 flex justify-start items-center gap-6 group-hover:-translate-y-1 group-hover:translate-x-1  duration-300 bg-white custom-border'>
					<div>
						<Badge title={type.title} />
					</div>

					<div>
						<h3 className='font-heading text-2xl font-medium uppercase'>{title}</h3>
						<span className='text-sm font-medium uppercase'>{formatDate(date_created)}</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default PostCardBig
