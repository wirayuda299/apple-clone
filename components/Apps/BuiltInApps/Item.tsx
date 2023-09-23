'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import SelectedItem from './SelectedItem';

type ItemProps<T> = {
	name: string;
	listId: number;
	applists: AppListsTypes[] & T;
	icon: string;
};

export default function Item<T>({
	applists,
	listId,
	icon,
	name,
}: ItemProps<T>) {
	const [selectedItem, setselectedItem] = useState<AppListsTypes>(applists[0]);

	const handleClick = useCallback((id: number) => {
		const founded = applists.find((item) => item.listId === id);
		if (!founded) return;
		return setselectedItem(founded);
	}, []);

	return (
		<>
			<button
				name={name}
				title={name}
				key={listId}
				onClick={() => handleClick(listId)}
				className='flex justify-center items-center flex-col '
			>
				<Image src={icon} width={50} height={50} alt={name} />
				<p className='text-[#6e6e73] text-xs md:text-sm font-semibold text-center'>
					{name}
				</p>
			</button>
			<SelectedItem selectedItem={selectedItem} />
		</>
	);
}
