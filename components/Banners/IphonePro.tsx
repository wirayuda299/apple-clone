import HeroLinks from '../hero/Links';
export default function Iphone() {
	return (
		<section
			className={`w-full text-black bg-white h-[600px] bg-cover md:bg-contain bg-no-repeat bg-center p-5`}
			style={{
				backgroundImage: `url(/assets/images/hero/iphone_yellow.jpg)`,
			}}
		>
			<div className='w-full flex flex-col justify-center items-center'>
				<div>
					<h2 className='font-semibold text-4xl sm:text-5xl md:text-6xl pt-10'>
						iPhone 14
					</h2>
					<p className='text-center text-xl  md:text-3xl'>Penuh keajaiban.</p>
				</div>
				<HeroLinks />
			</div>
		</section>
	);
}
