'use client';
import { navbarState } from '@/store/recoil';
import type { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useRecoilState } from 'recoil';

type CloseButtonProps = {};

const CloseButton: FC<CloseButtonProps> = (props) => {
	const [open, setOpen] = useRecoilState(navbarState);

	return (
		<button
			name='close'
			title='close'
			type='button'
			onClick={() => setOpen(false)}
			className='absolute top-3 right-3 lg:hidden'
		>
			<AiOutlineClose size={35} />
		</button>
	);
};
export default CloseButton;
