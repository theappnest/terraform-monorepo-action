import { context, getOctokit } from '@actions/github'
import { getReasonPhrase } from 'http-status-codes'
import { getAllModules } from './allModules'
import { getModulePaths, getSha } from './utils'

export async function getChangedModules(token: string): Promise<string[]> {
  const octokit = getOctokit(token)

  const { base, head } = await getSha(token)

  const response = await octokit.rest.repos.compareCommits({
    base,
    head,
    owner: context.repo.owner,
    repo: context.repo.repo,
  })

  if (response.status !== 200) {
    throw new Error(getReasonPhrase(response.status))
  }

  if (response.data.status === 'behind') {
    throw new Error(`HEAD ${response.data.status}`)
  }

  const changedModules = getModulePaths(response.data.files, 'filename')
  const allModules = await getAllModules(token)

  // filter to exclude deleted modules
  return changedModules.filter((module) => allModules.includes(module))
}
