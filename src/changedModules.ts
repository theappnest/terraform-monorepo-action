import { context, getOctokit } from '@actions/github'
import { getReasonPhrase } from 'http-status-codes'

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

  const modules = response.data.files?.reduce<string[]>(
    (paths, { filename }) => {
      if (filename.endsWith('.tf')) {
        paths.push(filename.substring(0, filename.lastIndexOf('/')))
      }
      return paths
    },
    [],
  )

  return Array.from(new Set(modules))
}
