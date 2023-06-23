import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import hero from './lib/sanity/schema/hero';
import banner from './lib/sanity/schema/banner';
import promos from './lib/sanity/schema/promos';
import carousel from './lib/sanity/schema/carousel';
const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
	title: 'Apple clone',
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
	basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH as string,
	plugins: [deskTool()],
	schema: {
		types: [hero, banner, promos, carousel],
	},
});

export default config;
