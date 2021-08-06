import { context, getOctokit } from '@actions/github'
import { getReasonPhrase } from 'http-status-codes'
import { getModulePaths, getSha } from './utils'

export async function getAllModules(token: string): Promise<string[]> {
  const octokit = getOctokit(token)

  const { head } = await getSha(token)

  const response = await octokit.rest.git.getTree({
    owner: context.repo.owner,
    repo: context.repo.repo,
    tree_sha: head,
    recursive: 'true',
  })

  if (response.status !== 200) {
    throw new Error(getReasonPhrase(response.status))
  }

  return getModulePaths(response.data.tree, 'path')
}
