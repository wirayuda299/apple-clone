import AppLists from '../BuiltInApps/AppListData';
import Title from '../title';
import proApps from '@/data/proApps.json';
export default function Pro() {
	return (
		<div className='flex w-full justify-center flex-col items-center'>
			<Title
				title='Aplikasi profesional'
				subtext='Untuk para profesional yang siap memaksimalkan kreativitas, tersedia aplikasi unggulan yang menyediakan kendali optimal atas pengeditan, pengolahan, dan output musik serta film.'
			/>
			<AppLists applists={proApps} />
		</div>
	);
}
