import Link from 'next/link';
import type { FC } from 'react';

type NavlinkProps = {
	path: string;
	name: string;
	handleClick: () => void;
};

const Navlink: FC<NavlinkProps> = ({ name, path, handleClick }) => {
	return (
		<li
			role='listitem'
			className='lg:text-xs group lg:hover:text-blue-600 lg:transition-all md:pl-8 ease duration-300 w-full lg:font-light text-left text-2xl font-semibold'
		>
			<Link
				key={path}
				as={path}
				prefetch={false}
				href={path}
				onClick={handleClick}
			>
				{name}
			</Link>
			<div className=' w-[0] bg-gray-400 bg-opacity-40 group-hover:w-full transition-all ease-in-out duration-500 lg:hidden h-[1px] rounded-full '></div>
		</li>
	);
};
export default Navlink;
