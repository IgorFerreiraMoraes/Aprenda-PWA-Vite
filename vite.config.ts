import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/Aprenda-PWA-Vite/',
	plugins: [
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['vite.svg'],
			manifest: {
				name: 'Contador Vite PWA',
				short_name: 'Contador PWA',
				description:
					'Um contador feito com Vite para demonstrar como criar uma PWA e instlá-la em dispositivos móveis',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/vite.svg',
						sizes: 'any',
						type: 'image/svg+xml',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
});
