import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import arrowRight from '@/public/icons/arrow-right.svg'

import dummyImage from '@/public/assets/review.jpg'

const PostCard = () => {
  return (
    <div className='relative rounded-lg'>
					
						<div className='absolute inset-0  bg-black rounded-lg -z-10'></div>

						<Link href='#' className='group relative z-10 block border-2 border-black rounded-lg hover:-translate-y-1 hover:translate-x-1 duration-300 bg-white'>
							<div className='p-3 flex flex-col justify-start items-start gap-3  '>
								<Image src={dummyImage} alt='' className='border-2 border-black rounded-lg w-full' />

								<div className='border-2 bg-yellow-300 px-4 py-1 rounded-sm'>
									<span className='uppercase font-accent text-xs'>Show</span>
								</div>
								<span className='text-sm font-medium uppercase'>15 marzec 2025</span>
								<h3 className='line-clamp-2 font-heading text-2xl leading-8 uppercase font-medium'>
									Gender Pay Gaps Published by the WGEA
								</h3>
								<p className='line-clamp-4 text-sm'>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores in perferendis voluptate
									architecto officia enim, sequi corporis accusantium, laudantium delectus pariatur dicta blanditiis
									obcaecati accusamus aliquam facilis voluptates distinctio debitis molestias exercitationem repellat?
									Distinctio officia facere, esse at voluptates et voluptate repudiandae.
								</p>
							</div>

							<div className='flex justify-between items-center border-t-2 border-black w-full  rounded-b-lg'>
								<div className='flex flex-wrap justify-start items-center gap-2 p-3'>
									<div className='border-2 bg-yellow-300 px-2 rounded-sm'>
										<span className='uppercase font-accent text-[10px]'>Switch</span>
									</div>
									<div className='border-2 bg-yellow-300 px-2 rounded-sm'>
										<span className='uppercase font-accent text-[10px]'>Pixel Art</span>
									</div>
									<div className='border-2 bg-yellow-300 px-2 rounded-sm'>
										<span className='uppercase font-accent text-[10px]'>+2</span>
									</div>
								</div>
								<div className='border-l-2 overflow-hidden relative group h-full p-7'>
									<Image
										src={arrowRight}
										alt=''
										className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[120%] duration-300 size-8'
									/>
									<Image
										src={arrowRight}
										alt=''
										className='absolute top-1/2 left-1/2 -translate-x-[200%] -translate-y-1/2 group-hover:-translate-x-1/2 duration-300 size-8'
									/>
									
								</div>
							</div>
						</Link>
					</div>
  )
}

export default PostCard