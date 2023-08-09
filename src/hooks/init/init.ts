import {Hook} from '@oclif/core'

const hook: Hook<'init'> = async function () {
  console.log('Greetings! from plugin-test-cjs-1 init hook')
}

export default hook
