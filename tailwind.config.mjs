/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
				sanstight: ['Inter Tight Variable', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
			},
			typography: {
				DEFAULT: {
					css: {
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						}
					}
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({addVariant}) {
			addVariant( 
			  'prose-inline-code',
			  '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
			);
		})
	],
}