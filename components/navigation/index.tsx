'use client';
import navlists from '../../data/navlists.json';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import Navlinks from './NavLinks';
import { useRecoilState } from 'recoil';
import { navbarState } from '@/store/recoil';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function Navigation() {
	const [isOpen, setisOpen] = useRecoilState(navbarState);

	return (
		<nav className='flex justify-between items-center w-full max-w-5xl	px-3 py-3 lg:py-0 md:px-5'>
			<div className='relative flex justify-between xl:justify-around items-center w-full'>
				<ul
					className={`flex  flex-col transition-all ease duration-500 justify-evenly md:justify-around lg:flex-row lg:bg-transparent overflow-hidden md:gap-5 p-5 lg:justify-center lg:p-0 ${
						isOpen ? 'top-0 h- h-screen left-0' : ' -top-[300%] h-[0] left-0'
					} md:justify-center  items-start lg:gap-10 xl:gap-14 max-w-5xl  text-[#cbd5e1] lg:items-center lg:h-11 fixed lg:static z-50 top-0 w-full bg-black`}
				>
					{navlists.map((list) => (
						<Navlinks
							handleClick={() => setisOpen(false)}
							name={list.name}
							path={list.path}
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
			<div className='inline-flex gap-5 md:gap-10'>
				<button type='button' name='search' title='search'>
					<AiOutlineSearch size={25} />
				</button>
				<button
					type='button'
					name='open'
					title='open'
					className='lg:hidden'
					onClick={(e) => {
						e.stopPropagation();
						setisOpen(!isOpen);
					}}
				>
					<HiOutlineMenuAlt4 size={25} />
				</button>
			</div>
		</nav>
	);
}
