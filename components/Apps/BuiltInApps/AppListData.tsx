'use client';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function AppLists({ applists }: { applists: any[] }) {
	const [selectedItem, setselectedItem] = useState<(typeof applists)[0]>(
		applists[0]
	);

	const handleClick = useCallback((id: number) => {
		const founded = applists.find((item) => item.listId === id);
		if (!founded) return;
		return setselectedItem(founded);
	}, []);

	return (
		<div className=' justify-center flex-col w-full items-center p-5  max-w-3xl text-black hidden md:flex'>
			<ul className='flex justify-center items-center gap-10'>
				{applists?.map((app) => (
					<button
						name={app.name}
						title={app.name}
						key={app.listId}
						onClick={() => handleClick(app?.listId)}
						className='flex justify-center items-center flex-col '
					>
						<Image src={app.icon} width={50} height={50} alt={app.name} />
						<p className='text-[#6e6e73] text-xs md:text-sm font-semibold text-center'>
							{app.name}
						</p>
					</button>
				))}
			</ul>
			<div className='bg-black w-full h-[1px] mt-5'></div>
			<div className='flex flex-col items-center my-4 px-5'>
				<p className='text-center text-sm font-medium'>{selectedItem?.desc}</p>
				<Link
					href={selectedItem?.path}
					className='text-center text-xl text-blue-500 py-5 font-semibold flex items-center space-x-3 '
				>
					{selectedItem?.title}
					<MdOutlineKeyboardArrowRight size={35} />
				</Link>

				<div className='animate-fadeIn transition-all ease duration-500'>
					<div className='relative grid place-content-center h-full'>
						<Image
							src={'/assets/images/mac/mac-frame.jpg'}
							width={510}
							className='w-80 h-auto md:w-[40rem] '
							height={510}
							alt={''}
						/>
						<Image
							src={selectedItem.mainImage}
							width={500}
							className='absolute inset-1 p-3 md:w-full object-contain'
							height={500}
							alt={selectedItem.name}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
