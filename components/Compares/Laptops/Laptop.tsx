import Data from './Data';

const Laptop = <TData extends LaptopCompares>({ data }: { data: TData[] }) => {
	return (
		<div className='container mx-auto h-fit w-full'>
			<div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 justify-center items-center'>
				{data.map((mac) => (
					<Data mac={mac} />
				))}
			</div>
		</div>
	);
};
export default Laptop;
