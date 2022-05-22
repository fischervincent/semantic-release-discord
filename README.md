# semantic-release-discord-bot

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to get release notifications on [discord](https://discord.com) using discord webhook

## Install

Add the plugin to your npm-project:

```bash
$ npm install semantic-release-discord -D
```

## Configuration

You need to have a [discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).
This plugin is to be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

Example:
```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "semantic-release-discord",
      {
        "notifyOnSuccess": true,
        "notifyOnFail": true,
        "discordWeebhook": "https://my.webhook.com"
      }
    ]
  ]
}
```

### Options

| Option               | Description                                                                                                                      | Default                                                        |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------- |
| `notifyOnSuccess`    | Determines if a successful release should trigger a discord message to be sent. If `false` this plugin does nothing on success.  | true                                                           |
| `notifyOnFail`       | Determines if a failed release should trigger a discord message to be sent. If `false` this plugin does nothing on fail.         | true                                                           |
| `discordWeebhook`    | Discord web hook url.                                                                                                            | value of the environment variable matching `discordWebhookVar` |
| `discordWebhookVar`  | This decides what the environment variable for exporting the discord webhook value.                                              | DISCORD_WEBHOOK                                                |
