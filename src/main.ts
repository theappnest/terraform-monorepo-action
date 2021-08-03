import * as core from '@actions/core'
import ignore from 'ignore'
import { getAllModules } from './allModules'
import { getChangedModules } from './changedModules'

async function run(): Promise<void> {
  try {
    const token = core.getInput('token', { required: true })
    const mode = core.getInput('mode', { required: true })
    const ignored = core.getInput('ignore')

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

    if (ignored) {
      const globs = ignored.split('\n').map((item) => item.trim())
      modules = ignore().add(globs).filter(modules)
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
