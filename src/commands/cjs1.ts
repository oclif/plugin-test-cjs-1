import {Command} from '@oclif/core'

export default class CJS1 extends Command {
  async run(): Promise<void> {
    this.log(`hello I am a CJS plugin from ${this.config.root}!`)
  }
}
