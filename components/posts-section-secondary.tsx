import { Post } from '@/types'

import Image from 'next/image'
import Link from 'next/link'
import Heading from './heading'
import { getAssetUrl } from '@/lib/utils'

import arrowRight from '@/public/assets/icons/arrow-right--dark.svg'

type Props = {
	preheading: string
	heading: string
	link?: string
	posts: Post[]
}
const PostsSectionSecondary = ({ preheading, heading, posts }: Props) => {
	return (
		<section className='max-w-screen-max mx-auto px-8 py-20 bg-black text-font-light'>
			<div className='space-y-12'>
				<Heading preheading={preheading} heading={heading} />

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{posts.map(post => (
						<div key={post.slug}>
							<Link href='#' className='relative group'>
								<Image
									src={getAssetUrl(post.thumbnail)}
									alt={post.title}
									width={500}
									height={500}
									className='border-2 border-white rounded-lg w-full aspect-square object-cover object-center'
								/>

								<div className=' absolute bottom-4 lg:bottom-8 right-4 lg:right-8 z-10 border-3 rounded-md border-black bg-ownOrange-800 p-3 group-hover:bg-ownYellow-400 duration-300'>
									<Image src='/assets/icons/pad.svg' alt='' width={32} height={32} />
								</div>
							</Link>

							<div className='mt-6 space-y-4 '>
								<h3 className='uppercase font-heading text-2xl font-medium '>{post.title}</h3>
								<span className='line-clamp-1 font-light'>{post.description}</span>
								<Link
									href='#'
									className='flex  gap-2  border-b-2 justify-start items-start w-fit pb-1 hover:border-ownOrange-800'>
									<Image src='/assets/icons/book-open.svg' alt='' width={24} height={24} />
									<span className='uppercase font-semibold'>Przeczytaj</span>
								</Link>
							</div>
						</div>
					))}

					<div className='hidden  border-2 border-white rounded-lg w-full aspect-square object-cover object-center bg-ownBlue-400 lg:flex flex-col justify-center items-center text-font-dark text-center gap-8'>
						<span className='uppercase font-semibold text-xl'>News track every week</span>
						<h3 className='uppercase font-accent text-4xl font-bold'>RTFRM SOUND COLLECTION </h3>

						<Link href='#' className='border-3 rounded-md border-black bg-ownOrange-800 p-3 px-8 flex justify-center items-center gap-2 uppercase font-medium group overflow-hidden'>
                        <Image
									src={arrowRight}
									alt=''
									className=' duration-300 size-6 -translate-x-[250%] group-hover:translate-x-0 '
								/>

							<span>Zacznij czytanie</span>
                            <Image
									src={arrowRight}
									alt=''
									className=' duration-300 size-6 group-hover:translate-x-[250%] '
								/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PostsSectionSecondary
