const defaultSuccessMessage = require("./default-success-message")
const replaceVariablesInTemplate = require("./replace-variables-in-template")
const getRepoInfo = require('./get-repo-info')
const splitDescriptionIfNeeded = require('./split-description-if-needed')

module.exports = (context, onSuccessTemplate) => {
  const {
    nextRelease,
    options,
    env: { SEMANTIC_RELEASE_PACKAGE, npm_package_name },
  } = context

  const repo = getRepoInfo(options.repositoryUrl)

  const package_name = SEMANTIC_RELEASE_PACKAGE || npm_package_name

  if (onSuccessTemplate) {
    return splitDescriptionIfNeeded(replaceVariablesInTemplate(onSuccessTemplate, {
      package_name,
      npm_package_version: nextRelease.version,
      repo_path: repo.path,
      repo_url: repo.URL,
      release_notes: nextRelease.notes
    }))
  } else {
    return splitDescriptionIfNeeded(defaultSuccessMessage(package_name, nextRelease))
  }
}
