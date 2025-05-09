// finished

import { Post } from '@/types'

import ROUTES from '@/lib/routes'

import Image from 'next/image'
import Link from 'next/link'

import Heading from '@/components/heading'
import PostCardSecondary from '@/components/postCard/post-card-secondary'

import Mario from '@/public/assets/mario.webp'
import arrowRightIcon from '@/public/assets/icons/arrow-right--dark.svg'

type Props = {
	preheading: string
	heading: string
	link?: string
	posts: Post[]
}
const Articles = ({ preheading, heading, posts }: Props) => {
	return (
		<section className=' relative  max-w-screen-max mx-auto px-8 py-20 bg-black text-font-light'>
			<Image src={Mario} alt='Mario Bros' className='hidden lg:block absolute right-12 top-6 z-0 w-[300px] ' />

			<div className='space-y-12 relative z-10'>
				<Heading preheading={preheading} heading={heading} />

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  '>
					{posts.map(post => (
						<PostCardSecondary key={post.slug} post={post} />
					))}

					<div className=' sm:col-span-2 lg:col-span-1 flex flex-col justify-center items-center gap-8 w-full  max-w-[400px] lg:max-w-none aspect-square  mx-auto px-2  text-center bg-ownPink-200  text-font-dark custom-border !border-white group'>
						<span className='text-xl  font-semibold uppercase'>Nowość co tydzień</span>
						<h3 className='text-3xl 2xl:text-4xl  font-accent  font-bold uppercase'>GROWE POGADANKI</h3>

						<Link
							href={ROUTES.blog.category('artykuły')}
							className=' flex justify-center items-center gap-2 p-3 px-8 border-3 rounded-md border-black bg-ownYellow-400  uppercase font-medium group overflow-hidden'>
							<Image
								src={arrowRightIcon}
								alt=''
								className='  size-6 -translate-x-[250%] group-hover:translate-x-0 duration-300'
							/>

							<span>Zobacz wszystkie</span>
							<Image src={arrowRightIcon} alt='' className=' size-6   group-hover:translate-x-[250%] duration-300' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Articles
