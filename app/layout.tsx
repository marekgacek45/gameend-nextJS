import type { Metadata } from 'next'
import { Rubik, Roboto_Mono, Press_Start_2P } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'

const rubik = Rubik({
	weight: ['300', '400', '500', '600', '700', '800', '900'], // Wszystkie dostępne wagi
	variable: '--font-rubik',
	subsets: ['latin'],
})
const robotoMono = Roboto_Mono({
	weight: ['100', '200', '300', '400', '500', '600', '700'], // Wszystkie dostępne wagi
	variable: '--font-roboto-mono',
	subsets: ['latin'],
})
const pressStart = Press_Start_2P({
	weight: '400',
	variable: '--font-press_start',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'gameend',
	description: 'i jedziemy...',
}

const  RootLayout =({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang='pl' suppressHydrationWarning>
			<meta name="apple-mobile-web-app-title" content="gameend" />
			<body className={`${rubik.variable} ${robotoMono.variable} ${pressStart.variable} antialiased`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
