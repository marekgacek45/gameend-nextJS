//update links

import ROUTES from '@/lib/routes'

import CategoryCard from '@/components/category-card'

const Categories = () => {
	return (
		<section className='max-w-screen-max mx-auto px-8 pt-0 pb-12'>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<CategoryCard
					link={ROUTES.blog.category('nintendo')}
					title='Nintendo'
					cardColor='bg-nintendo-red text-font-dark'
					btnColor='bg-nintendo-blue '
					
				/>
				<CategoryCard
					link={ROUTES.blog.type('teksty')}
					title='Teksty'
					cardColor='bg-ownYellow-400 text-font-dark'
					btnColor='bg-ownPurple-400 text-font-light '
					lightArrow
				/>
				
				<CategoryCard
					link={ROUTES.blog.category('playstation')}
					title='Play Station'
					cardColor='bg-ps-blue text-font-light'
					btnColor='bg-white text-font-dark'
				/>
			</div>
		</section>
	)
}

export default Categories
