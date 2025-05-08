
import CategoryCard from '../category-card'

const Categories = () => {
  return (
	<section className='max-w-screen-max mx-auto px-8 pt-0 pb-12'>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

				<CategoryCard link='#' title='Nintendo' cardColor="bg-nintendo-red text-font-light" btnColor="bg-nintendo-blue " lightArrow/>

				<CategoryCard link='#' title='Play Station' cardColor="bg-ps-blue text-font-light" btnColor="bg-white text-font-dark"/>

				<CategoryCard link='#' title='Artykuły' cardColor="bg-ownYellow-400 text-font-dark" btnColor="bg-ownPurple-400 text-font-light " lightArrow/>
				
				
			</div>
		</section>
  )
}

export default Categories