//finished

import { Post } from '@/types'

import ROUTES from '@/lib/routes'
import { formatDate, getAssetUrl } from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'

import Badge from '@/components/badge'

const PostCardSmall = ({ post: { title, slug, date_created, thumbnail,type, categories } }: { post: Post }) => {
	const postCategories = categories.map(category => {
		return category.post_categories_id
	})

	return (
		<div className='relative rounded-lg'>
			<div className='absolute inset-0  bg-black rounded-lg -z-10'></div>

			<Link
				href={ROUTES.blog.post(type.slug, slug)}
				className=' relative block bg-white  hover:-translate-y-1 hover:translate-x-1 duration-300  group  z-10 custom-border'>
				<div className='flex flex-col justify-start items-start gap-3  p-3 '>
					<Image
						src={getAssetUrl(thumbnail)}
						alt={title}
						width={350}
						height={250}
						className=' w-full max-h-[250px] object-cover object-center custom-border'
					/>

					<div className='flex flex-wrap justify-start items-center gap-2'>
						{postCategories.slice(0, 2).map(category => (
							<Badge key={category.slug} size={'small'} title={category.title} />
						))}
						{postCategories.length > 2 && <Badge size={'small'} title={`+${postCategories.length - 2}`} />}
					</div>

					<h3 className='min-h-[64px]  text-2xl font-heading font-medium  leading-8 uppercase  line-clamp-2'>
						{title}
					</h3>
					<span className='text-sm font-medium uppercase'>{formatDate(date_created)}</span>
				</div>
			</Link>
		</div>
	)
}

export default PostCardSmall
