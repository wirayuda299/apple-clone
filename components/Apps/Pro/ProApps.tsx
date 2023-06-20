import AppLists from '../BuiltInApps/Lists';
import Title from '../title';
type AppListsTypesData<TLists> = {
	proApps: AppListsTypes[] & TLists;
};
export default function ProApps<T>({ proApps }: AppListsTypesData<T>) {
	return (
		<div className='flex w-full overflow-x-hidden justify-center flex-col items-center'>
			<Title
				title='Aplikasi profesional'
				subtext='Untuk para profesional yang siap memaksimalkan kreativitas, tersedia aplikasi unggulan yang menyediakan kendali optimal atas pengeditan, pengolahan, dan output musik serta film.'
			/>
			<AppLists applists={proApps} />
		</div>
	);
}
