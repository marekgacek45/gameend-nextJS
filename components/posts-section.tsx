import { Post } from '@/types'

import Image from 'next/image'
import Link from 'next/link'

import PostCard from '@/components/post-card'


type Props = {
	preheading: string
	heading: string
	link: string
	posts: Post[]
}


const PostsSection = async ({ preheading,heading,link,posts }:  Props ) => {

	return (
		<section className='max-w-screen-max mx-auto px-8 py-10'>
			<div className='space-y-12'>
				<div className='flex justify-between'>
					<div className='flex flex-col gap-6'>
						<span className='uppercase font-semibold font-accent'>({preheading})</span>
						<h2 className='text-5xl font-heading font-black uppercase text'>{heading}</h2>
					</div>

					<Link
						className='font-heading font-medium self-end flex justify-center items-center gap-2 text-xl relative w-fit pb-1 after:block after:absolute after:h-[3px] after:bg-primary-400 after:w-full after:bottom-0 after:mt-2 after:scale-x-100 hover:after:scale-x-0 after:transition after:duration-300 after:origin-right uppercase group'
						href={link}>
						<Image
							src='/icons/arrow-right.svg'
							alt=''
							width={32}
							height={32}
							className='group-hover:-rotate-45 duration-300 size-8'
						/>
						Zobacz wszystkie
					</Link>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
					{posts.map(post => (
						<PostCard key={post.slug} post={post} />
					))}
				</div>
			</div>
		</section>
	)
}

export default PostsSection
