//finished

import Link from 'next/link'

import Ribbon from '@/components/ribbon'
import ScrollToTop from '@/components/scroll-to-top'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer>
			<div className='relative mt-12'>
				<div className='absolute inset-0 '>
					<Ribbon
						speed={15}
						textFirst='Blog'
						textSecond='gameend'
						className='rotate-[2deg] py-1 bg-black text-font-light'
					/>
				</div>
				<div className='absolute inset-0'>
					<Ribbon speed={35} textFirst='gameend' textSecond='blog' className='rotate-[-2deg] py-1 ' />
				</div>
			</div>

			<div className='bg-ownPink-400 pt-50'>
				<div className=' py-4 px-8  text-center border-y-3 border-black'>
					<p>
						Kiedyś to będzie najlepsza strona o giereczkach na całym świecie. <br /> Teraz jest przynajmniej
						najładniejsza!
					</p>
				</div>
				<div className='flex flex-col sm:flex-row justify-between items-center  gap-4 sm:gap-0  px-8 py-4 text-[10px] font-accent font-bold uppercase '>
					<span>© {currentYear} gameend</span>

					<span>
						Site by
						<Link
							href='https://marekgacekdev.pl'
							target='_blank'
							className='underline ml-2 hover:text-ownYellow-600 duration-150'>
							Marek Gacek
						</Link>
					</span>

					<ScrollToTop />
				</div>
			</div>
		</footer>
	)
}

export default Footer
