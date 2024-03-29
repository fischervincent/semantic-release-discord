# semantic-release-discord

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to get release notifications on [discord](https://discord.com) using discord webhook

## Install

Add the plugin to your npm-project:

```bash
$ npm install semantic-release-discord -D
```

## Configuration

You need to have a [discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).

This plugin has to be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration). Example:

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
        "discordWebhookId": "000000000000000000",
        "discordWebhookToken": "my-token"
      }
    ]
  ]
}
```

## Options

| Option                   | Description                                                                                                                      | Default                                                             |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| `notifyOnSuccess`        | Determines if a successful release should trigger a discord message to be sent. If `false` this plugin does nothing on success.  | true                                                                |
| `notifyOnFail`           | Determines if a failed release should trigger a discord message to be sent. If `false` this plugin does nothing on fail.         | true                                                                |
| `onSuccessTemplate`      | Provides a template for the Discord message object on success when `notifyOnSuccess` is `true`. See [templating](#templating).   | undefined                                                           |
| `discordWebhookId`       | Discord web hook id.                                                                                                             | value of the environment variable matching `discordWebhookIdVar`    |
| `discordWebhookIdVar`    | This decides what the environment variable for exporting the discord webhook id value.                                           | DISCORD_WEBHOOK_ID                                                  |
| `discordWebhookToken`    | Discord web hook token.                                                                                                          | value of the environment variable matching `discordWebhookTokenVar` |
| `discordWebhookTokenVar` | This decides what the environment variable for exporting the discord webhook token value.                                        | DISCORD_WEBHOOK_TOKEN                                               |

## Templating

This template will be used for the respective Discord message. The template should be an object that follows the [Discord webhook Form Params](https://discord.com/developers/docs/resources/webhook#execute-webhook). Strings within the template will have keywords replaced:

| Keyword                | Description                 | Example                                           |
| ---------------------- | --------------------------- | ------------------------------------------------- |
| `$package_name`        | The name of the package.    | semantic-release-test                             |
| `$npm_package_version` | The version of the release. | 1.0.93                                            |
| `$repo_path`           | The repository path.        | juliuscc/semantic-release-test                    |
| `$repo_url`            | The repository URL.         | https://github.com/juliuscc/semantic-release-test |
| `$release_notes`       | The notes of the release.   |                                                   |

A sample configuration with template can look like this

```json
"onSuccessTemplate": {
  "content": "A new version of $package_name as been released !",
  "username": "$package_name",
  "embeds": [
    {
      "title": "$package_name $npm_package_version",
      "url": "$repo_url",
      "description": "$release_notes",
      "color": 16776960
    }
  ]
}
```
