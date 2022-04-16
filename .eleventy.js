const HtmlMin = require("html-minifier");
const ErrorOverlay = require("eleventy-plugin-error-overlay");

module.exports = (eleventyConfig) => {
  // adding image file types is necessary, otherwise 11ty won't copy them during build
  eleventyConfig.setTemplateFormats(["md", "jpg", "jpeg", "png", "gif"]);

  // ErrorOverlay shows 11ty build errors in the web browser during development
  eleventyConfig.addPlugin(ErrorOverlay);

  // HTML output minification
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: "content",
      output: "dist",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
