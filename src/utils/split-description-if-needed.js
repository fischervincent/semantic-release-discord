const DISCORD_EMBEDS_SIZE_LIMIT = 6000;
const DISCORD_EMBED_DESCRIPTION_SIZE_LIMIT = 4096;

const DISCORD_EMBEDS_NUMBER_LIMIT = 10;

function splitDescriptionIfNeeded(discordTemplate) {
  // first we split each embed if the description is too long
  if (discordTemplate.embeds) {
    discordTemplate.embeds = discordTemplate.embeds.flatMap(embed => {
      if (embed.description.length < DISCORD_EMBED_DESCRIPTION_SIZE_LIMIT) return embed;

      const splittedByNewLine = embed.description.split('\n')
      let descriptions = [];
      for (const line of splittedByNewLine) {
        if (descriptions.length === 0) {
          descriptions.push(line);
        } else {
          const lastDescription = descriptions[descriptions.length - 1];
          if (lastDescription.length + line.length >= DISCORD_EMBED_DESCRIPTION_SIZE_LIMIT) {
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
  // Since we can't send more than 10 embeds or embeds larger than 6000 characters, we need to split the embeds into multiple messages.
  // 1 Embed = 1 message to make it simple.
  if (JSON.stringify(discordTemplate.embeds).length > DISCORD_EMBEDS_SIZE_LIMIT || discordTemplate.embeds.length > DISCORD_EMBEDS_NUMBER_LIMIT) {
    return discordTemplate.embeds.map((embed, index) => {
      if (index === 0) return { ...discordTemplate, embeds: [embed] }
      return { embeds: [embed] }
    })
  } else {
    return [discordTemplate]
  }
}

module.exports = splitDescriptionIfNeeded
