import Link from 'next/link';
import type { FC } from 'react';

type NavlinkProps = {
	path: string;
	name: string;
};

const Navlink: FC<NavlinkProps> = ({ name, path }) => {
	return (
		<li className='lg:text-xs lg:font-light text-left text-2xl font-semibold '>
			<Link key={path} as={path} prefetch={false} href={path}>
				{name}
			</Link>
		</li>
	);
};
export default Navlink;
