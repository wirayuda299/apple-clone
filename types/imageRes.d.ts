type Base = {
	_updatedAt: string;
	_createdAt: string;
	_rev: string;
	_id: string;
	title: string;
	subTitle: string;
	_type: 'document';
};

type HeroImageRes = {
	page: string;
	path: string;
	heroImage: ImagesSizesTypes;
} & Base;
