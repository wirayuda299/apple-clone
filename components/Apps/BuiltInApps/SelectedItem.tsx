import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';

type SelectedItemProps = {
	selectedItem: AppListsTypes;
};
export default function SelectedItem({ selectedItem }: SelectedItemProps) {
	return (
		<div className='flex flex-col items-center my-4 px-5'>
			<p className='text-center text-sm font-medium'>{selectedItem?.desc}</p>
			<Link
				prefetch={false}
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
						alt={'mac frame image'}
					/>
					<Image
						src={selectedItem.mainImage}
						width={500}
						loading='lazy'
						className='absolute inset-1 p-3 md:w-full object-contain'
						height={500}
						alt={selectedItem.name}
					/>
				</div>
			</div>
		</div>
	);
}
