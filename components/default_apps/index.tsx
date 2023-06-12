import AppLists from './app_lists';
import Title from './title';

export default function Apps() {
	return (
		<div className='flex w-full justify-center flex-col items-center'>
			<Title />
			<AppLists />
		</div>
	);
}
