import Title from '../title';
import Lists from './Lists';
import applists from '@/data/builtInApps.json';

export default function AppLists() {
	return (
		<div className='flex w-full justify-center flex-col items-center'>
			<Title
				title='Aplikasi Bawaan'
				subtext='Alat kreativitas dan produktivitas yang andal ada di setiap Mac —
				aplikasi yang membantu Anda menjelajah, terhubung, dan bekerja dengan
				lebih efisien.'
			/>
			<Lists applists={applists} />
		</div>
	);
}
