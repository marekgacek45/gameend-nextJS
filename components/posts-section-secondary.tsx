import { Post } from '@/types'

import Image from 'next/image'
import Link from 'next/link'

import arrowRightIcon from '@/public/assets/icons/arrow-right--dark.svg'
import Mario from '@/public/assets/mario.webp'
import Heading from '@/components/heading'
import PostCardSecondary from '@/components/post-card-secondary'

type Props = {
	preheading: string
	heading: string
	link?: string
	posts: Post[]
}
const PostsSectionSecondary = ({ preheading, heading, posts }: Props) => {
	return (
		<section className='max-w-screen-max mx-auto px-8 py-20 bg-black text-font-light relative '>
			<Image
				src={Mario}
				alt=''
				className='hidden lg:block absolute right-12 top-6 z-0 w-[300px] group-hover:-translate-y-2 '
			/>

			<div className='space-y-12 relative z-10'>
				<Heading preheading={preheading} heading={heading} />

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
					{posts.map(post => (
						<PostCardSecondary key={post.slug} post={post} />
					))}

					<div className='hidden lg:flex flex-col justify-center items-center gap-8 w-full aspect-square  text-center border-2 border-white rounded-lg  bg-ownBlue-400  text-font-dark  group'>
						<span className='text-xl  font-semibold uppercase'>News track every week</span>
						<h3 className='text-4xl  font-accent  font-bold uppercase'>RTFRM SOUND COLLECTION </h3>

						<Link
							href='#'
							className=' flex justify-center items-center gap-2 p-3 px-8 border-3 rounded-md border-black bg-ownOrange-800  uppercase font-medium group overflow-hidden'>
							<Image
								src={arrowRightIcon}
								alt=''
								className='  size-6 -translate-x-[250%] group-hover:translate-x-0 duration-300'
							/>

							<span>Zacznij czytanie</span>
							<Image src={arrowRightIcon} alt='' className=' size-6   group-hover:translate-x-[250%] duration-300' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PostsSectionSecondary
