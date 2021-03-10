const markdown = require("./markdown")
const picture = require("./picture")

module.exports = {
  markdown: (value) => {
    if (!value) {
      return ""
    }

    return markdown.render(value)
  },

  picture,
}
