import { sanityClient } from '@/config/sanity';

export async function getMovies() {
	try {
		const response = await sanityClient.fetch(`*[_type == "carousels" ]`);
		return response as MoviesCarousels[];
	} catch (error) {
		throw error;
	}
}

export async function getPromo() {
	try {
		const promos = await sanityClient.fetch(
			`*[_type == "promos"] | order(_createdAt asc)`
		);
		return promos as PromoResponseTypes[];
	} catch (error) {
		throw error;
	}
}

export async function getHeroIpad() {
	try {
		const res = await sanityClient.fetch(
			`*[_type == "hero" && page == "ipad"]`
		);
		return res as HeroImageRes[];
	} catch (error) {
		throw error;
	}
}

export async function getHeroIphone14() {
	try {
		const res = await sanityClient.fetch(
			`*[_type == "hero" && page == "home"]`
		);
		return res as HeroImageRes[];
	} catch (error) {
		throw error;
	}
}

export async function getMacbookPro() {
	try {
		const res = await sanityClient.fetch(`*[_type == "hero" && page == "mac"]`);
		return res as HeroImageRes[];
	} catch (error) {
		throw error;
	}
}
