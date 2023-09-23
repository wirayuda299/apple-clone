import Item from './Item';

type AppListsTypesData<TLists> = {
	applists: AppListsTypes[] & TLists;
};

export default function Lists<TLists>({ applists }: AppListsTypesData<TLists>) {
	return (
		<div className='mx-auto overflow-x-hidden justify-center flex-col w-full items-center p-5  max-w-3xl text-black hidden md:flex'>
			<ul className='flex justify-center items-center gap-10'>
				{applists?.map((app) => (
					<Item {...app} applists={applists} key={app.listId} />
				))}
			</ul>
			<div className='bg-black w-full h-[0.5px] mt-5'></div>
		</div>
	);
}
