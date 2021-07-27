import { context, getOctokit } from '@actions/github'
import { getReasonPhrase } from 'http-status-codes'

export async function getAllModules(token: string): Promise<string[]> {
  const octokit = getOctokit(token)

  let head: string | undefined

  switch (context.eventName) {
    case 'pull_request':
      head = context.payload.pull_request?.head?.sha
      break
    case 'push':
      head = context.payload.after
      break
    default:
      throw new Error(`Unsupported event: ${context.eventName}`)
  }

  if (!head) {
    throw new Error('Ref not found')
  }

  const response = await octokit.rest.git.getTree({
    owner: context.repo.owner,
    repo: context.repo.repo,
    tree_sha: head,
  })

  if (response.status !== 200) {
    throw new Error(getReasonPhrase(response.status))
  }

  const modules = response.data.tree?.reduce<string[]>((paths, { path }) => {
    if (path?.endsWith('.tf')) {
      paths.push(path.substring(0, path.lastIndexOf('/')))
    }
    return paths
  }, [])

  return Array.from(new Set(modules))
}
