import Header from '@/components/header';
import './globals.css';
import { Metadata } from 'next';
import Providers from '@/provider';

export const metadata: Metadata = {
	title: 'Apple - apple website clone',
	description: 'Apple website clone using nextjs',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='bg-black text-white select-none'>
				<Providers>
					<main className='w-full h-full overflow-hidden'>
						<Header />
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
