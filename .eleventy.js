const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

module.exports = config => {
  config.addCollection('articles', collection => {
    return collection
      .getFilteredByGlob('./src/articles/*.md');
  });
  config.addCollection('media', collection => {
    return collection
      .getFilteredByGlob('./src/media/*.md');
  });
  config.addCollection('talks', collection => {
    return collection
      .getFilteredByGlob('./src/talks/*.md');
  });
  config.addCollection('posts', collection => {
    return collection
      .getFilteredByGlob('./src/*/*.md');
  })
  config.addPassthroughCopy("./src/assets");
  config.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  config.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      });
    }
    return content;
  });
  config.addTransform("inject-hljs", (content, outputPath) => {
    if (outputPath.endsWith(".html") && content.includes('<pre><code')) {
      return content
        .replace('</head>', '<link rel="stylesheet" href="/assets/highlight.min.css"></head>')
        .replace('</body>', '<script src="/assets/highlight.min.js"></script></body>');
    }
    return content;
  })
  return {
    markdownTemplateEngine: false,
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    svgTemplateEngine: false,
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
