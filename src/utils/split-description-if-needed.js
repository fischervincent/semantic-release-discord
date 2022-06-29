const DISCORD_DESCRIPTION_SIZE_LIMIT = 4096;

function splitDescriptionIfNeeded(discordTemplate) {
  if (discordTemplate.embeds) {
    discordTemplate.embeds = discordTemplate.embeds.flatMap(embed => {
      if (embed.description.length < DISCORD_DESCRIPTION_SIZE_LIMIT) return embed;

      const splittedByNewLine = embed.description.split('\n')
      let descriptions = [];
      for (const line of splittedByNewLine) {
        if (descriptions.length === 0) {
          descriptions.push(line);
        } else {
          const lastDescription = descriptions[descriptions.length - 1];
          if (lastDescription.length + line.length >= DISCORD_DESCRIPTION_SIZE_LIMIT) {
            descriptions.push(line);
          } else {
            descriptions[descriptions.length - 1] = `${lastDescription}\n${line}`;
          }
        }
      }
      const buildFooter = ({ color, footer, timestamp, fields, image, description }) => ({ color, footer, timestamp, fields, image, description })
      const buildFirstEmbed = ({ footer, timestamp, fields, image, ...embedWithoutFooter }) => ({ ...embedWithoutFooter })
      const buildMiddleEmbed = ({ color, description }) => ({ color, description })

      const embedsWithDescription = descriptions.map((description, index) => {
        if (index === 0) return buildFirstEmbed({ ...embed, description })
        if (index === descriptions.length - 1) return buildFooter({ ...embed, description })
        return buildMiddleEmbed({ ...embed, description })
      })
      return embedsWithDescription;
    })
  }
  return discordTemplate;
}

module.exports = splitDescriptionIfNeeded
