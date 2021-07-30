import { context, getOctokit } from '@actions/github'
import { getReasonPhrase } from 'http-status-codes'
import { getAllModules } from './allModules'
import { getModulePaths } from './utils'

export async function getChangedModules(token: string): Promise<string[]> {
  const octokit = getOctokit(token)

  let base: string | undefined
  let head: string | undefined

  switch (context.eventName) {
    case 'pull_request':
      base = context.payload.pull_request?.base?.sha
      head = context.payload.pull_request?.head?.sha
      break
    case 'push':
      base = context.payload.before
      head = context.payload.after
      break
    default:
      throw new Error(`Unsupported event: ${context.eventName}`)
  }

  if (!base || !head) {
    throw new Error('Refs not found')
  }

  const response = await octokit.rest.repos.compareCommits({
    base,
    head,
    owner: context.repo.owner,
    repo: context.repo.repo,
  })

  if (response.status !== 200) {
    throw new Error(getReasonPhrase(response.status))
  }

  if (response.data.status !== 'ahead') {
    throw new Error(`HEAD ${response.data.status}`)
  }

  const changedModules = getModulePaths(response.data.files, 'filename')
  const allModules = await getAllModules(token)

  // filter to exclude deleted modules
  return changedModules.filter((module) => allModules.includes(module))
}
