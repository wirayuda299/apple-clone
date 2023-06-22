type ImagesMetadata = {
	source: string;
	width: number;
	height: number;
};
type ImagesSizesTypes = {
	imageLarge: ImagesMetadata;
	imageSmall: ImagesMetadata;
	imageMedium: ImagesMetadata;
};
type PromoResponseTypes = {
	pathLeft: string;
	pathRight: string;
	logo?: string;
	styles?: string;
	promosImage: {
		_type: 'document';
	} & ImagesSizesTypes;
} & Base;
