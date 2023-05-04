const pluginWebc = require("@11ty/eleventy-plugin-webc");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {
	eleventyConfig.ignores.add("README.md");

	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginWebc, {
		components: [
			"./_components/**/*.webc",
			"npm:@11ty/is-land/*.webc",
			"npm:@11ty/eleventy-plugin-syntaxhighlight/*.webc",
		],
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
