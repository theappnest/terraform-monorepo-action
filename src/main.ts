import * as core from '@actions/core'
import { getAllModules } from './allModules'
import { getChangedModules } from './changedModules'

async function run(): Promise<void> {
  try {
    const token = core.getInput('token', { required: true })
    const mode = core.getInput('mode', { required: true })
    const ignore = core.getInput('ignore')
    const include = core.getInput('include')

    let modules: string[]

    switch (mode) {
      case 'all':
        modules = await getAllModules(token)
        break

      case 'changed':
        modules = await getChangedModules(token)
        break

      default:
        throw new Error(`Unknown mode: ${mode}`)
    }

    if (ignore) {
      const list = ignore.split(',').map((item) => item.trim())
      modules = modules.filter((module) => !list.includes(module))
    }

    if (include) {
      const list = include.split(',').map((item) => item.trim())
      modules = modules.filter((module) => list.includes(module))
    }

    if (modules.length) {
      core.debug(`Found modules:${modules.map((module) => `\n- ${module}`)}`)
    } else {
      core.debug('No modules found')
    }

    core.setOutput('modules', modules)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
