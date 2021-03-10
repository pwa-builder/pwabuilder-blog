const fs = require("fs")
const path = require("path")
const crypto = require("crypto")

// Get config
const config = require("@config")

// Size of media hash
const SIZE = 8

// Hash function
function hashContent(content) {
  return crypto.createHash("md5").update(content).digest("hex").slice(0, SIZE)
}

module.exports = (content, extension) => {
  // Hash content
  const hash = hashContent(content)

  // Output media directory
  const mediaDir = path.join(process.cwd(), config.dir.output, config.dir.media)

  // Ensure the media folder exists
  if (!fs.existsSync(mediaDir)) {
    fs.mkdirSync(mediaDir, {
      recursive: true,
    })
  }

  // Save hashed media file
  const filename = `${hash}.${extension}`
  fs.writeFileSync(path.join(mediaDir, filename), content)

  // Output root path from output directory
  return path.posix.join("/", config.dir.media, filename)
}

module.exports.hashContent = hashContent
