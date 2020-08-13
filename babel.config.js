module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      {
        sourceMap: true
      }
    ]
  ],
  plugins: [['emotion'], '@babel/plugin-proposal-class-properties'],
  ignore: ['**/*.spec.js', '**/*.spec.jsx']
};
