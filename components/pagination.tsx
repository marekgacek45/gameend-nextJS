//finished

'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useTransition } from 'react'

import Image from 'next/image'

import chevronRight from '@/public/assets/icons/chevron-right.svg'
import chevronLeft from '@/public/assets/icons/chevron-left.svg'

export default function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
	const searchParams = useSearchParams()
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const handlePageChange = (newPage: number) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams)
			params.set('page', newPage.toString())
			router.replace(`?${params.toString()}`)
		})
	}

	const pageNumbers: number[] = []

	pageNumbers.push(1)
	for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
		pageNumbers.push(i)
	}

	if (!pageNumbers.includes(totalPages)) {
		pageNumbers.push(totalPages)
	}

	const renderPageNumbers = pageNumbers.map((page, index) => (
		<>
			{index > 0 && page !== pageNumbers[index - 1] + 1 && (
				<span key={`ellipsis-${index}`} className='text-font-black font-accent'>
					...
				</span>
			)}
			<button
				key={page}
				onClick={() => handlePageChange(page)}
				disabled={isPending}
				aria-label={`Strona ${page}`}
				className={`px-2 py-1 cursor-pointer custom-border font-accent text-sm ${
					page === currentPage
						? 'bg-nintendo-red text-white border-primary-400'
						: 'bg-ownYellow-400 text-black hover:bg-ownPurple-400 hover:text-font-light'
				}`}>
				{page}
			</button>
		</>
	))

	return (
		totalPages > 1 && (
			<nav className='flex gap-4 justify-center items-center pb-16'>
				<button
					className='px-2 py-1 bg-transparent text-black  cursor-pointer group'
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage <= 1 || isPending}
					aria-label='Poprzednia'>
					<Image src={chevronLeft} alt='' className='group-hover:scale-110' />
				</button>

				{renderPageNumbers}

				<button
					className='px-2 py-1 bg-transparent text-black  cursor-pointer group'
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage >= totalPages || isPending}
					aria-label='Następna'>
					<Image src={chevronRight} alt='' className='group-hover:scale-110' />
				</button>
			</nav>
		)
	)
}
