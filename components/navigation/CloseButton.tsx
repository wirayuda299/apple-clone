'use client';
import { navbarState } from '@/store/recoil';
import { AiOutlineClose } from 'react-icons/ai';
import { useRecoilState } from 'recoil';

const CloseButton = () => {
	const [, setOpen] = useRecoilState(navbarState);

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
