import Image from 'next/image';
import Link from 'next/link';
import macbook from '@/data/macbook.json';

export default function Macbook_header() {
	return (
		<header>
			<div className='container mx-auto grid place-content-center'>
				<div className='bg-white w-full flex justify-center gap-5 items-center'>
					{macbook.map((mac) => (
						<Link href={mac.path} className='p-2' key={mac.id}>
							<Image
								className='w-14 h-14'
								src={mac.image}
								alt={mac.name}
								width={100}
								height={100}
							/>
							<p className='text-black text-center text-xs'>{mac.name}</p>
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}
