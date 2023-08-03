import {expect, test} from '@oclif/test'

describe('hello', () => {
  test
  .stdout()
  .command(['cjs1'])
  .it('runs cjs1 cmd', ctx => {
    expect(ctx.stdout).to.contain('hello I am a CJS plugin')
  })
})
