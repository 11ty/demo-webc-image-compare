const pluginWebc = require("@11ty/eleventy-plugin-webc");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
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