const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    // purgecss({
    //   content: ['./**/*.html', './src/*.js'],
    //   extractors: [
    //     {
    //       extractor: class TailwindExtractor {
		  //       static extract(content) {
		  //         return content.match(/[A-z0-9-:\/]+/g) || [];
		  //       }
		  //     },
    //       extensions: ['html', 'css', 'js']
    //     }
	   //  ],
    // }),
  ],
}