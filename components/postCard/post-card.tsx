//finished

import { Post } from '@/types'

import ROUTES from '@/lib/routes'
import { formatDate, getAssetUrl } from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'

import Badge from '@/components/badge'

import arrowRight from '@/public/assets/icons/arrow-right.svg'

const PostCard = ({ post: {  title, slug, date_created,description,thumbnail,type,categories },color } : {post: Post,color?:string}) => {
	

	const postCategories = categories.map(category => {
		return category.post_categories_id
	})


	return (
		<div className='relative rounded-lg text-font-dark'>
			
			<div className='absolute inset-0  bg-black rounded-lg z-10'></div>

			<Link
				href={ROUTES.blog.post(slug)}
				className={` relative  block  hover:-translate-y-1 hover:translate-x-1 duration-300 group z-10 custom-border ${color}`}>
				<div className=' flex flex-col justify-start items-start gap-3 p-3 '>
					<Image
						src={getAssetUrl(thumbnail)}
						alt={title}
						width={350}
						height={250}
						className=' w-full max-h-[250px] object-cover object-center custom-border'
					/>

					
					<Badge title={type.title} />
					<span className='text-sm font-medium uppercase'>
						{formatDate(date_created)}
					</span>
					<h3 className='min-h-[64px] text-2xl font-heading font-medium  uppercase leading-8 line-clamp-2'>{title}</h3>
					<p className=' min-h-[80px] text-sm line-clamp-4 '>{description}</p>
				</div>

				<div className='flex justify-between items-center  w-full border-t-3 border-black  rounded-b-lg'>
					<div className='flex flex-wrap justify-start items-center gap-2 p-3'>
						{postCategories.slice(0, 2).map(category => (
							
							<Badge key={category.slug} size={'small'} title={category.title} />
						))}
						{postCategories.length > 2 && (
							
							<Badge  size={'small'} title={`+${postCategories.length - 2}`} />
						)}
					</div>
					<div className=' relative h-full  p-7 border-l-3 overflow-hidden group '>
						<Image
							src={arrowRight}
							alt=''
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 group-hover:translate-x-[120%] duration-300 '
						/>
						<Image
							src={arrowRight}
							alt=''
							className='absolute top-1/2 left-1/2 -translate-x-[200%] -translate-y-1/2 size-8 group-hover:-translate-x-1/2 duration-300 '
						/>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default PostCard
