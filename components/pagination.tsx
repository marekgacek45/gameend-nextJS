'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useTransition } from 'react'

import chevronRight from '@/public/assets/icons/chevron-right.svg'
import chevronLeft from '@/public/assets/icons/chevron-left.svg'
import Image from 'next/image'


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

	// Generowanie przycisków stron
	const pageNumbers = []

	// Dodajemy zawsze pierwszą stronę
	pageNumbers.push(1)

	// Dodajemy dwie strony przed i dwie strony po aktualnej, jeśli to możliwe
	for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
		pageNumbers.push(i)
	}

	// Dodajemy zawsze ostatnią stronę, jeśli nie jest już w liście
	if (!pageNumbers.includes(totalPages)) {
		pageNumbers.push(totalPages)
	}

	// Dodajemy wielokropek, jeśli trzeba
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
				// variant={page === currentPage ? 'outline' : 'default'}
				className={
					page === currentPage
						? 'bg-nintendo-red text-white border-primary-400 px-2 py-1 cursor-pointer custom-border font-accent text-sm'
						: 'bg-ownYellow-400 text-black px-2 py-1 cursor-pointer custom-border font-accent text-sm hover:bg-ownPurple-400 hover:text-font-light'
				}>
				{page}
			</button>
		</>
	))

	return (
		<nav className='flex gap-4 justify-center items-center pb-16'>
			{/* Przycisk "Poprzednia" */}
			<button
				className='bg-transparent text-black px-2 py-1 cursor-pointer group'
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage <= 1 || isPending}>
				<Image src={chevronLeft}  alt="" className='group-hover:scale-110'/>
			</button>

			{/* Generowanie przycisków z numerami stron */}
			{renderPageNumbers}

			{/* Przycisk "Następna" */}
			<button
				className='bg-transparent text-black px-2 py-1 cursor-pointer group'
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage >= totalPages || isPending}>
			<Image src={chevronRight}  alt="" className='group-hover:scale-110'/>
			</button>
		</nav>
	)
}