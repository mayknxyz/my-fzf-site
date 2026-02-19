// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://myfzf.mikenavales.xyz',
	integrations: [
		starlight({
			title: 'my-fzf',
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/my-backpack-logo.png',
			},
			customCss: ['./src/styles/custom.css'],
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/mayknxyz/my-fzf',
				},
				{
					icon: 'external',
					label: 'mikenavales.xyz',
					href: 'https://mikenavales.xyz',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/mayknxyz/my-fzf-site/edit/main/',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', slug: 'getting-started' },
						{ label: 'Installation', slug: 'installation' },
						{ label: 'Dependencies', slug: 'dependencies' },
					],
				},
				{
					label: 'Usage',
					items: [
						{ label: 'Naming Convention', slug: 'naming-convention' },
						{ label: 'Examples', slug: 'examples' },
					],
				},
				{
					label: 'Commands',
					items: [
						{ label: 'Overview', slug: 'commands' },
						{ label: 'Core', slug: 'commands/core' },
						{ label: 'Scoped', slug: 'commands/scoped' },
						{ label: 'Variants', slug: 'commands/variants' },
						{ label: 'Extensions', slug: 'commands/extensions' },
						{ label: 'File Operations', slug: 'commands/operations' },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Overview', slug: 'architecture/overview' },
						{ label: 'Modules', slug: 'architecture/modules' },
					],
				},
				{
					label: 'Troubleshooting',
					autogenerate: { directory: 'troubleshooting' },
				},
			],
		}),
	],
});
