const COLORS = require("./colors")

module.exports = (packageName, errors) => {
  const plural = errors.length > 1

  const messageSummaryLine = `${
    plural ? `${errors.length} Errors` : "An error"
  } occurred while trying to publish the new version of \`${packageName}\`!`

  return {
    content: messageSummaryLine,
    embeds: errors.map((error) => ({
      color: COLORS.RED,
      description: `\`\`\`${error.stack}\`\`\``,
    })),
  }
}
