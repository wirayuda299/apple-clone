export default {
	name: 'banner',
	title: 'Banner',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'SubTitle',
			name: 'subTitle',
			type: 'string',
		},
		{
			name: 'imageLarge',
			title: 'ImageLarge',
			type: 'image',
		},
		{
			name: 'imageSmall',
			title: 'ImageSmall',
			type: 'image',
		},
		{
			name: 'page',
			title: 'Page',
			type: 'string',
		},
	],
};
