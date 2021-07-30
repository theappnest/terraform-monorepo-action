export function getModulePaths<T extends Record<string, unknown>>(
  files: T[] | undefined,
  pathProp: keyof T,
): string[] {
  const result = files?.reduce<string[]>((paths, file) => {
    const path = file[pathProp] as string
    if (path.endsWith('.tf')) {
      paths.push(path.substring(0, path.lastIndexOf('/')))
    }
    return paths
  }, [])
  return Array.from(new Set(result))
}
