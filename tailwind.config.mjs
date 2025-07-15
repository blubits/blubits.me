/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "blockquote p:first-of-type::before": null,
            "blockquote p:last-of-type::after": null,
          },
        },
      }),
    },
  },
};
