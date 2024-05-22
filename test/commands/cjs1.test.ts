import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('cjs1', () => {
  it('runs cjs1 command', async () => {
    const {stdout} = await runCommand('cjs1')
    expect(stdout).to.contain('hello I am a CJS plugin')
  })
})
