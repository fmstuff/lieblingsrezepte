const HtmlMin = require("html-minifier");
const ErrorOverlay = require("eleventy-plugin-error-overlay");

module.exports = (eleventyConfig) => {
  // adding image file types is necessary, otherwise 11ty won't copy them during build
  eleventyConfig.setTemplateFormats(["md", "njk"]);

  // Copy `img/` to `dist/img`
  eleventyConfig.addPassthroughCopy("content/img");

  // Copy `js/` to `dist/js`
  eleventyConfig.addPassthroughCopy("content/js");

  // Copy any image files from "rezepte" to `dist`, via Glob pattern
  eleventyConfig.addPassthroughCopy("content/rezepte/**/*.jpg");
  eleventyConfig.addPassthroughCopy("content/rezepte/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("content/rezepte/**/*.png");
  eleventyConfig.addPassthroughCopy("content/rezepte/**/*.gif");

  // rebuild on CSS changes
  eleventyConfig.addWatchTarget("./content/_includes/css/");

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
      includes: "_includes",
    },
  };
};
