import { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from '@/provider';
import Header from '@/components/header';

export const metadata: Metadata = {
	title: 'Apple - apple website clone',
	description: 'Apple website clone using nextjs',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<section className='bg-black text-white select-none'>
			<main className='w-full h-full overflow-hidden'>
				<Providers>
					<Header />
					{children}
				</Providers>
			</main>
		</section>
	);
}
