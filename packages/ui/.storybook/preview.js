import '../src/base.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: 'light', color: '#fff' },
      { name: 'dark', class: 'dark', color: '#000' }
    ],
    target: 'html',
  },
}