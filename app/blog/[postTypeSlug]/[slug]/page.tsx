import Badge from '@/components/badge'
import { getPostBySlug, getPosts } from '@/lib/queries'
import ROUTES from '@/lib/routes'
import { formatDate, getAssetUrl, truncateTitle } from '@/lib/utils'


import Image from 'next/image'
import Link from 'next/link'
import chevronRight from '@/public/assets/icons/chevron-right.svg'
import PostsSection from '@/components/posts-section'
import { notFound } from 'next/navigation'

type Props = {
	params: {
		postTypeSlug: string
		slug: string
	}
}

const Page = async ({ params }: Props) => {
	const slug = params.slug
	const postType = params.postTypeSlug

	const post = await getPostBySlug(slug)

	if (!post) {
		return notFound()
	}

	const { thumbnail, title, type, categories, description, content, date_created } = post

	const otherPosts = await getPosts({
		filter: { status: { _eq: 'published' }, slug: { _neq: slug } },
		fields: [
			'title',
			'date_created',
			'slug',
			'description',
			'thumbnail',
			'featured',
			'type.*',
			'categories.*',
			'categories.post_categories_id.title',
			'categories.post_categories_id.slug',
		],
		limit: 4,
	})

	const postCategories = categories.map(category => {
		return category.post_categories_id
	})

	console.log(date_created)

	return (
		<>
			<section className=' lg:h-[70vh] -mt-12 px-6 bg-purple-300 flex flex-col lg:flex-row w-full gap-10 xl:gap-20 py-10 lg:py-20 border-b-3 border-black'>
				<div className='lg:w-1/2 flex flex-col justify-center items-start gap-6'>
					<nav className='flex justify-start items-center flex-wrap lg:pl-4'>
						<Link href={ROUTES.home} className='underline font-semibold uppercase text-sm'>
							Home
						</Link>
						<Image src={chevronRight} alt='' className='size-4' />
						<Link href={ROUTES.blog.index} className='underline font-semibold uppercase text-sm'>
							Blog
						</Link>
						<Image src={chevronRight} alt='' className='size-4' />
						<Link href={ROUTES.blog.type(postType)} className='underline font-semibold uppercase text-sm'>
							{type.title}
						</Link>
						<Image src={chevronRight} alt='' className='size-4' />
						<span className=' font-semibold uppercase text-sm'>{truncateTitle(title)} </span>
					</nav>

					<Image
						src={getAssetUrl(thumbnail)}
						alt={title}
						width={760}
						height={434}
						className='w-full h-full object-cover object-center custom-border min-h-[300px]'
						sizes='(min-width: 1024px) 50vw, 90vw'
						priority
					/>
				</div>

				<div className='lg:w-1/2 flex flex-col gap-6 justify-center items-start'>
					<Link href={ROUTES.blog.type(type.slug)}>
						<Badge title={type.title} />
					</Link>
					<h1 className='text-4xl font-heading font-black uppercase '>{title}</h1>
					<p className='xl:w-[70%]'>{description}</p>

					<div>
						<span className='font-heading text-xl font-semibold'>Kategorie:</span>
						<div className='flex gap-2 mt-2'>
							{postCategories.map(category => (
								<Link key={category.slug} href={ROUTES.blog.category(category.slug)}>
									<Badge size={'small'} title={category.title} />
								</Link>
							))}
						</div>
					</div>

					<span className=' text-sm font-medium uppercase'>{formatDate(date_created)}</span>
				</div>
			</section>

			<article
				className='max-w-screen-lg mx-auto px-6 lg:px-0 py-10 md:py-20 prose lg:text-lg'
				dangerouslySetInnerHTML={{ __html: content }}></article>

			<PostsSection
				preheading='jest tego więcej'
				heading='Pozostałe posty'
				link={ROUTES.blog.index}
				posts={otherPosts}
				color='bg-black !text-white'
				cardColor='bg-white'
			/>
		</>
	)
}

export default Page
