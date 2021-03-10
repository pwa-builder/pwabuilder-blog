const path = require("path")
const markdownIt = require("markdown-it")
const picture = require("./picture")

// Get config
const config = require("@config")

module.exports = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
})
  .use(require("markdown-it-imsize"))
  .use((md) => {
    md.renderer.rules.image = (tokens, index) => {
      const token = tokens[index]

      const src = token.attrs[token.attrIndex("src")][1]
      const alt = token.content

      const width =
        token.attrIndex("width") > 0
          ? token.attrs[token.attrIndex("width")][1]
          : null
      const height =
        token.attrIndex("height") > 0
          ? token.attrs[token.attrIndex("height")][1]
          : null

      // Do not process absolute images or GIF's
      const isAbsolute = src.match("^([A-Za-z]+://|//)")
      if (isAbsolute || path.extname(src) === ".gif") {
        const srcPath = isAbsolute
          ? src
          : path.posix.join("/", config.dir.media, src)
        return `<img src="${srcPath}" alt="${alt}" ${
          width ? `width="${width}"` : ""
        } ${height ? `height="${height}"` : ""} loading="lazy">`
      }

      return picture(src, alt, width, height)
    }
  })
