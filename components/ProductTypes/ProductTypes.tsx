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
			<div className='max-w-5xl mx-auto grid place-content-center overflow-hidden p-2'>
				<div className='bg-white flex snap-mandatory snap-center gap-5 overflow-x-auto w-full'>
					{productTypes.map((mac) => (
						<Link
							href={mac.path}
							prefetch={false}
							key={mac.id}
							className='group'
						>
							<Image
								className='w-14 h-14 object-contain mx-auto'
								src={mac.image}
								alt={mac.name}
								width={100}
								height={100}
							/>
							<p
								title={mac.name}
								className='text-black p-2 md:text-center text-xs group-hover:text-blue-600 transition-all ease duration-300 truncate'
							>
								{mac.name}
							</p>
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}
