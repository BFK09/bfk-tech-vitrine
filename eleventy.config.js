// Configuration d'Eleventy : il lit src/, assemble les pages et écrit le site fini dans _site/
module.exports = function (eleventyConfig) {
    // Fichiers copiés tels quels (Eleventy n'a rien à assembler dedans)
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/sitemap.xml");

    return {
        dir: {
            input: "src",       // nos sources
            output: "_site",    // le site prêt à publier (jamais modifié à la main)
        },
        htmlTemplateEngine: "njk", // les pages .html peuvent utiliser {{ }} et {% %}
    };
};
