'use client';

import { useRecoilState } from 'recoil';

import { navbarState } from '@/store/recoil';
import navlists from '../../data/navlists.json';
import Navlink from './NavLinks';
import { AiOutlineClose } from 'react-icons/ai';
import NavigationButton from './Buttons';

export default function NavigationWrapper() {
	const [isOpen, setisOpen] = useRecoilState(navbarState);

	return (
		<>
			<div className='relative flex justify-between xl:justify-around items-center w-full '>
				<ul
					className={`flex flex-col transition-all ease-out duration-700 justify-evenly md:justify-around lg:flex-row lg:!bg-transparent overflow-hidden md:gap-5 p-5 lg:justify-center lg:p-0 items-start lg:gap-10 xl:gap-14 max-w-5xl !left-0 bg-opacity-95 lg:bg-opacity-100 backdrop-blur-md lg:backdrop-blur-0  text-[#cbd5e1] lg:items-center lg:h-11 fixed lg:static z-50 top-0 w-full bg-black ${
						isOpen ? 'h-screen inset-0' : ' h-0 !-top-[200%] left-0 '
					} `}
				>
					{navlists.map((list) => (
						<Navlink
							handleClick={() => setisOpen(false)}
							{...list}
							key={list.id}
						/>
					))}
					<button
						name='close'
						title='close'
						type='button'
						onClick={(e) => {
							e.stopPropagation();
							setisOpen(false);
						}}
						className='absolute top-5 right-5 lg:hidden'
					>
						<AiOutlineClose size={35} />
					</button>
				</ul>
			</div>
			<NavigationButton isOpen={isOpen} setisOpen={setisOpen} />
		</>
	);
}
