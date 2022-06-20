const { MessageEmbed } = require('discord.js');

const COLORS = require("./colors")

const removeHashMarkdowns = (text) =>
  text.replace(/\n### /g, "\n").replace(/\n## /g, "\n")
const removeDoubleNewLines = (text) => text.replace(/\n\n/g, "\n")
const removeFirstLine = (text) => {
  const [, ...lines] = text.split("\n")
  return lines.join("\n")
}

module.exports = (packageName, nextRelease) => {
  const embed = new MessageEmbed()
    .setColor(COLORS.BLUE)
    .setTitle(`${packageName} v${nextRelease.version}`)
    .setDescription(`${removeDoubleNewLines(
      removeHashMarkdowns(removeFirstLine(nextRelease.notes))
    )}`)
    .setTimestamp()

  return {
    content: `A new version of \`${packageName}\` has been released!`,
    embeds: [embed],
  }
}
