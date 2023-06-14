'use client';
import navlists from '../../data/navlists.json';
import { AiOutlineSearch } from 'react-icons/ai';
import CloseButton from './CloseButton';
import Navlink from './navLink';
import { useRecoilState } from 'recoil';
import { navbarState } from '@/store/recoil';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function Navigation() {
	const [isOpen, setisOpen] = useRecoilState(navbarState);
	return (
		<nav className='flex justify-between items-center w-full max-w-5xl	px-3 py-3 lg:py-0 md:px-5'>
			<div className='relative flex justify-between xl:justify-around items-center w-full'>
				<ul
					className={`flex flex-col transition-all ease duration-500 justify-start lg:flex-row lg:bg-transparent overflow-hidden gap-5 p-5 lg:p-0	 ${
						isOpen ? 'left-0' : '-left-full'
					} md:justify-center  items-start lg:gap-10 xl:gap-14 max-w-5xl  text-[#cbd5e1] lg:items-center lg:h-11 fixed lg:static z-50 top-0 w-full h-screen bg-black`}
				>
					{navlists.map((list) => (
						<Navlink
							handleClick={() => setisOpen(false)}
							name={list.name}
							path={list.path}
							key={list.id}
						/>
					))}
					<CloseButton />
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
					onClick={() => setisOpen(!isOpen)}
				>
					<HiOutlineMenuAlt4 size={25} />
				</button>
			</div>
		</nav>
	);
}
