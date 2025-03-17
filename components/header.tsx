'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/assets/logo.png'
import { usePathname } from 'next/navigation'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Sun } from 'lucide-react'
import { ThemeToggler } from './theme-toggler'

const Header = () => {
	const pathname = usePathname()

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	]

	return (
		<header className='bg-white '>
			<div className='border-b-2 border-black flex justify-between items-center max-w-screen-max mx-auto max:border-x-2 h-[80px]'>
				<div className='px-8 border-r-2 border-black flex justify-center items-center h-full'>
					<Link href='/'>
						<Image src={logo} alt='gamened.pl' width={60} height={60} />
					</Link>
				</div>

				<div className='border-l-2 border-black   h-full flex justify-center items-center'>
					<nav className=' hidden lg:flex px-8'>
						<ul className='flex justify-center items-center gap-8'>
							{links.map(link => (
								<li key={link.name}>
									<Link href={link.href} className={` ${pathname === link.href ? 'nav-link--active' : 'nav-link'}`}>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className='lg:hidden px-8 order-1'>
						<Sheet>
							<SheetTrigger
								aria-label='Otwórz menu'
								className='flex justify-center items-center bg-secondary-400 rounded-md '>
								{/* <Hamburger /> */}
								<Menu className='size-10' />
							</SheetTrigger>
							<SheetContent className='px-12 bg-red-500 border-background-dark'>
								<SheetHeader className='px-0'>
									<SheetTitle>
										<SheetClose asChild>
											<Link href='/' className='flex justify-start items-center gap-3 tracking-wider'>
												<Image src={logo} alt='/' width={60} height={60} />
												<span className='font-accent'>gameend</span>
											</Link>
										</SheetClose>
									</SheetTitle>
								</SheetHeader>

								<ul className='flex flex-col gap-6  '>
									{links.map(link => (
										<li key={link.name} className='w-full'>
											<SheetClose asChild>
												<Link
													href={link.href}
													className={`!text-xl w-full block ${
														pathname === link.href ? 'nav-link--active' : 'nav-link'
													}`}>
													{link.name}
												</Link>
											</SheetClose>
										</li>
									))}
								</ul>
							</SheetContent>
						</Sheet>
					</div>

					<div className='border-r-2 lg:border-l-2 border-black h-full flex justify-center items-center px-8 '>
						<Sun className='size-9'/>
					</div>
				</div>

				{/* <ThemeToggler/> */}
			</div>
		</header>
	)
}

export default Header
