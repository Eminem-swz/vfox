import { execa } from 'execa'

export const buildDeclaration = async () => {
  await execa('vue-tsc', ['--project', './build/tsconfig.declaration.json'])
  await execa('gulp', ['copyDeclaration', '--gulpfile', './build/gulpfile.js'])
}
