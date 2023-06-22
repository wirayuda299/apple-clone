export default function BlurryBackground() {
	return (
		<>
			<div className='w-[16rem] h-[16rem] md:w-[28rem] md:h-[28rem] -bottom-40 lg:w-[30rem] lg:h-[30rem] rounded-full absolute top-56 lg:top-0 -left-40 sm:-left-16 lg:left-60  translate-x-1/2 bg-[#0d022d] blur-3xl'></div>
			<div className='w-[16rem] h-[16rem] md:w-[28rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] rounded-full absolute lg:top-0 right-8 md:right-40 sm:right-48 top-56  translate-x-1/2 bg-[#240227] blur-3xl'></div>
		</>
	);
}
