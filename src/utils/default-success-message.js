const COLORS = require("./colors")

const removeHashMarkdowns = (text) =>
  text.replace(/\n### /g, "\n").replace(/\n## /g, "\n")
const removeDoubleNewLines = (text) => text.replace(/\n\n/g, "\n")
const removeFirstLine = (text) => {
  const [, ...lines] = text.split("\n")
  return lines.join("\n")
}

module.exports = (packageName, nextRelease) => ({
  content: `A new version of \`${packageName}\` has been released!`,
  embeds: [
    {
      title: `${packageName} v${nextRelease.version}`,
      description: `${removeDoubleNewLines(
        removeHashMarkdowns(removeFirstLine(nextRelease.notes))
      )}`,
      color: COLORS.BLUE,
    },
  ],
})
