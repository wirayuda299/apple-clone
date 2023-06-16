import Image from 'next/image';
import Link from 'next/link';

export default function ProductTypes({
	productTypes,
}: {
	productTypes: any[];
}) {
	return (
		<header className='overflow-hidden'>
			<div className='max-w-3xl mx-auto grid place-content-center overflow-hidden'>
				<div className='bg-white flex justify-center gap-5 items-center w-full snap-mandatory overflow-x-auto'>
					{productTypes.map((mac) => (
						<Link href={mac.path} key={mac.id}>
							<Image
								className='w-14 h-14 '
								src={mac.image}
								alt={mac.name}
								width={100}
								height={100}
							/>
							<p className='text-black md:text-center text-xs'>{mac.name}</p>
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}
