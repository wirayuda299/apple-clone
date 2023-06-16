type TitleProps = {
	title: string;
	subtext: string;
};

export default function Title({ title, subtext }: TitleProps) {
	return (
		<div className='max-w-2xl'>
			<h2 className='font-bold text-black text-3xl md:text-4xl text-center'>
				{title}
			</h2>
			<p className='text-center text-black p-5'>{subtext}</p>
		</div>
	);
}
