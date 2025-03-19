import Reviews from '@/components/home/reviews'
import Ribbon from '@/components/ribbon'

const Home = () => {
	return (
		<>
			<Ribbon textFirst='The Sound' textSecond='alternative' />

			<Reviews />
			<div className='relative mt-12'>
			<div className='absolute inset-0'>
					<Ribbon speed={50} textFirst='The Sound' textSecond='alternative' className='rotate-[3deg] py-1 bg-black text-white' />
				</div>
				<div className='absolute inset-0'>
					<Ribbon speed={15} textFirst='The Sound' textSecond='alternative' className='rotate-[-3deg] py-1 ' />
				</div>
				
			</div>
		</>
	)
}

export default Home
