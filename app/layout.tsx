import type { Metadata } from 'next'
import { Rubik, Roboto_Mono, Press_Start_2P } from 'next/font/google'

import config from '@/lib/config'

import Header from '@/components/header'
import Footer from '@/components/footer'

import './globals.css'

const rubik = Rubik({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-rubik',
	subsets: ['latin'],
})
const robotoMono = Roboto_Mono({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	variable: '--font-roboto-mono',
	subsets: ['latin'],
})
const pressStart = Press_Start_2P({
	weight: '400',
	variable: '--font-press_start',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: {
		default: config.metadata.title,
		template: `%s | ${config.metadata.title}`,
	},
	description: config.metadata.description,
	generator: 'Next.js',
	applicationName: config.metadata.title,
	referrer: 'origin-when-cross-origin',
	keywords: [
		'blog o grach',
		'gry',
		'nintendo',
		'playstation',
		'gameend',
		'blog',
		'gry nintendo',
		'gry playstation',
		'switch',
	],
	authors: { name: 'Marek Gacek', url: 'https://marekgacekdev.pl' },
	creator: 'Marek Gacek',
	publisher: 'Marek Gacek',
	alternates: {
		canonical: config.env.productionUrl,
	},
	openGraph: {
		title: config.metadata.title,
		description: config.metadata.description,
		type: 'website',
		locale: 'pl_PL',
		url: config.env.productionUrl,
		siteName: config.metadata.title,
	},
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang='pl' suppressHydrationWarning>
			<meta name='apple-mobile-web-app-title' content='gameend' />
			<meta name='theme-color' content='#f2eded' />
			<body className={`${rubik.variable} ${robotoMono.variable} ${pressStart.variable} antialiased`}>
				<Header />
				<main className=' mt-28 md:mt-32'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
