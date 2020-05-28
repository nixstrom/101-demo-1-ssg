module.exports = function(eleventyConfig) {
  const { DATE_CONTEXT, CONTEXT } = process.env;

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      data: CONTEXT === "production" ? "../data/prod" : "../data/stage"
    }
  };
};
