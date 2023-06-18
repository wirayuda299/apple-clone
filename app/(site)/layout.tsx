import { Metadata } from 'next';
import Providers from '@/provider';
import Header from '@/components/header';

export const metadata: Metadata = {
	title: 'Apple - apple website clone',
	description: 'Apple website clone using nextjs',
};

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='bg-black text-white select-none'>
			<Providers>
				<Header />
				<main className='w-full h-full overflow-hidden'>{children}</main>
			</Providers>
		</section>
	);
}
