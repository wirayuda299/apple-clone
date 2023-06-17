import Image from 'next/image';
import Link from 'next/link';

type ProductType = {
	id: string;
	name: string;
	image: string;
	path: string;
};

export default function ProductTypes<T extends ProductType>({
	productTypes,
}: {
	productTypes: T[];
}) {
	return (
		<header className='overflow-hidden'>
			<div className='max-w-3xl mx-auto grid place-content-center overflow-hidden p-2'>
				<div className='bg-white flex snap-mandatory snap-center gap-5 overflow-x-auto'>
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
