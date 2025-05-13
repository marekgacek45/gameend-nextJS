// finished

import { Post } from '@/types'

import ROUTES from '@/lib/routes'
import { getAssetUrl } from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'

import arrowRight from '@/public/assets/icons/arrow-right.svg'

const FeaturedPost = ({ post: { title, slug, thumbnail, description,type } }: { post: Post }) => {
	return (
		<div className='flex flex-col w-full h-full  custom-border cursor-pointer'>
			<div className='relative flex-grow flex w-full h-[77%] border-b-3 border-black '>
				<Image
					src={getAssetUrl(thumbnail)}
					alt={title}
					width={1200}
					height={600}
					className=' h-full w-full object-cover object-center max-h-[250px] sm:max-h-[500px] xl:max-h-none'
					quality={60}
					priority
					sizes='(min-width: 1280px) 1200px, 100vw'
				
				/>
			</div>

			<div className='flex flex-col md:flex-row h-1/5'>
				<div className='flex flex-col justify-center items-start gap-3  flex-grow  p-5 bg-black text-font-light'>
					<h2 className='text-lg sm:text-3xl font-heading font-semibold uppercase line-clamp-1 '>{title}</h2>
					<p className=' text-left text-sm  md:text-lg font-light leading-[1.6] line-clamp-4 md:line-clamp-2 '>
						{description}
					</p>
					<Link
						href={ROUTES.blog.post(type.slug, slug)}
						className='flex md:hidden justify-center items-center gap-3   text-center  group'>
						<span className='text-sm sm:text-base font-accent  font-semibold uppercase '>Zobacz</span>
						<div className='p-1   group-hover:-rotate-45 duration-300 size-8 '>
							<Image src={arrowRight} alt='' />
						</div>
					</Link>
				</div>
				<div className='hidden md:flex justify-start  md:justify-center items-center flex-grow-0 bg-white'>
					<Link
						href={ROUTES.blog.post(type.slug, slug)}
						className='flex justify-center items-center gap-3 p-3 px-5 md:px-12  text-center  group'>
						<span className='text-sm sm:text-base font-accent  font-semibold uppercase '>Zobacz</span>
						<div className='p-1 bg-black rounded-full  group-hover:-rotate-45 duration-300 size-6 sm:size-8 '>
							<Image src={arrowRight} alt='' />
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default FeaturedPost
