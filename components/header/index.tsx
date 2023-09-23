import { Navigation } from '../index';
import Logo from './Logo';

export default function Header() {
	return (
		<header className='bg-[#111112] text-white fixed z-50 top-0 w-full backdrop-blur-sm bg-opacity-50 '>
			<div className='container mx-auto flex justify-center items-center '>
				<nav className='flex justify-center items-center mx-5 md:mx-0 md:px-5 w-full'>
					<Logo />
					<Navigation />
				</nav>
			</div>
		</header>
	);
}
