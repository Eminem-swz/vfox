import defaultConfig from './config'

export default async () => {
  return {
    ...defaultConfig,
    testMatch: ['<rootDir>/packages/vfox-ui/**/__tests__/*.[jt]s?(x)']
  }
}
