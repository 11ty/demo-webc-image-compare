const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: "_includes/webc/*.webc"
	});

	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	eleventyConfig.addPassthroughCopy({
		"static/*": "/",
		"node_modules/@11ty/is-land/is-land.js": "/is-land.js"
	});

	eleventyConfig.setServerOptions({
		domdiff: false
	});
};