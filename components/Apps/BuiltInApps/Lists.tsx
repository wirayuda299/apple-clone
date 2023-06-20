'use client';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import SelectedItem from './SelectedItem';

type AppListsTypesData<TLists> = {
	applists: AppListsTypes[] & TLists;
};

export default function Lists<TLists>({ applists }: AppListsTypesData<TLists>) {
	const [selectedItem, setselectedItem] = useState<AppListsTypes>(applists[0]);

	const handleClick = useCallback((id: number) => {
		const founded = applists.find((item) => item.listId === id);
		if (!founded) return;
		return setselectedItem(founded);
	}, []);

	return (
		<div className='mx-auto overflow-x-hidden justify-center flex-col w-full items-center p-5  max-w-3xl text-black hidden md:flex'>
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
			<div className='bg-black w-full h-[0.5px] mt-5'></div>
			<SelectedItem selectedItem={selectedItem} />
		</div>
	);
}
