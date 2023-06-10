import Header from '@/components/header';
import './globals.css';
import { Metadata } from 'next';
import Providers from '@/provider';

export const metadata: Metadata = {
	title: 'Apple',
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
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
