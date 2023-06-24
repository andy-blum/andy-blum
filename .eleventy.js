const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const pluginRss = require("@11ty/eleventy-plugin-rss");

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
  config.addFilter('planetDrupal', function(collection) {
    return collection.filter(item => !item.data.canonical && item.data.tags?.includes('drupal'))
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
  config.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
      closingSingleTag: "default" // opt-out of <img/>-style XHTML single tags
    }
  });
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
