'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/assets/logo.png'
import { usePathname } from 'next/navigation'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import  Menu  from 'pixelarticons/svg/menu.svg'




const Header = () => {
	const pathname = usePathname()

	const links = [
	
		{ name: 'Blog', href: '/blog' },
		{ name: 'Nintendo', href: '/blog/nintendo' },
		{ name: 'PlayStation', href: '/blog/play-station' },
		{ name: 'Artykuły', href: '/blog/artykuly' },
		{ name: 'Sklepik', href: 'https://www.olx.pl/oferty/uzytkownik/2Mdl13/?tab=ads' },
	]

	return (
		<header className='bg-white  fixed left-0 right-0 top-0 z-50'>
			<div className='border-b-3 border-black  flex justify-between items-center max-w-screen-max mx-auto max:border-x-2 h-[80px]'>
				<div className='px-8 border-r-3 border-black  flex justify-center items-center h-full '>
					<Link href='/'>
						<Image src={logo} alt='gamened.pl' width={60} height={60} className='size-15 ' />
					</Link>
				</div>

				<div className='border-l-3 border-black   h-full flex justify-center items-center'>
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
								className='flex justify-center items-center bg-secondary-400 rounded-md cursor-pointer text'>
								{/* <Hamburger /> */}
								<Image src={Menu} alt='' width={40} height={40} className='size-10' />
							</SheetTrigger>
							<SheetContent className='px-6 bg-ownPink-200 border-background-dark'>
								<SheetHeader className='px-0'>
									<SheetTitle>
										<SheetClose asChild>
											<Link href='/' className='flex justify-start items-center gap-3 tracking-wider '>
												<Image src={logo} alt='/' width={60} height={60} className='size-14' />
												<span className='font-accent text-sm font-light'>gameend.pl</span>
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
													className={`!text-xl !font-light w-full block hover:!border-black ${
														pathname === link.href ? 'nav-link--active !border-black' : 'nav-link '
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

					
				</div>

			</div>
		</header>
	)
}

export default Header
