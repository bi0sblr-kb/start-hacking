import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Start Hacking',
			social: {
				github: 'https://github.com/bi0sblr-kb/start-hacking',
			},
			editLink: {
				baseUrl: 'https://github.com/bi0sblr-kb/start-hacking/edit/main',
			},
			sidebar: [
				{
					label: 'Computers',
					autogenerate: { directory: 'computers' }
				},
				{
					label: 'Programming',
					autogenerate: { directory: 'programming' }
				},
			],
		}),
	],
});
