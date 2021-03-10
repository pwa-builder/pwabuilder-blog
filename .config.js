module.exports = {
  dir: {
    // ⬇ Eleventy uses these
    input: "src",
    output: "dist",
    layouts: "layouts",
    includes: "includes",
    data: "data",
    // ⬇ These are custom and used by various utilities etc.
    assets: "assets",
    styles: "assets/styles",
    media: "media",
  },
}
