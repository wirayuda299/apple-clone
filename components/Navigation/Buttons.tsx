import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import type { SetterOrUpdater } from 'recoil';

type NavigationButtonProps = {
	isOpen: boolean;
	setisOpen: SetterOrUpdater<boolean>;
};

export default function NavigationButton({
	setisOpen,
	isOpen,
}: NavigationButtonProps) {
	return (
		<div className='inline-flex gap-5 md:gap-10'>
			<button type='button' name='search' title='search'>
				<AiOutlineSearch size={25} />
			</button>
			<button
				type='button'
				name='open menu'
				title='open menu'
				className='lg:hidden'
				onClick={(e) => {
					e.stopPropagation();
					setisOpen(!isOpen);
				}}
			>
				<HiOutlineMenuAlt4 size={25} />
			</button>
		</div>
	);
}
