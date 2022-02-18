import defaultConfig from './config'

export default async () => {
  return {
    ...defaultConfig,
    testMatch: ['<rootDir>/packages/vfox/**/__tests__/*.spec.[jt]s?(x)']
  }
}
