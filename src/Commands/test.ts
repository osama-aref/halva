import yargs from 'yargs';
import { HalvaRunTests, HalvaTestConfig } from '../TestRunner';

export class Test implements yargs.CommandModule {
  public command = 'test';
  public describe = 'Run tests';

  public builder(args: yargs.Argv) {
    return args
      .option('p', {
        alias: 'path',
        type: 'string',
        required: true,
        describe: 'Path to test folder'
      })
      .option('c', {
        alias: 'config',
        type: 'string',
        required: false,
        default: null,
        describe: 'Path to configure file'
      })
      .option('n', {
        alias: 'network',
        type: 'string',
        required: false,
        default: null,
        describe: 'Network name'
      })
      .option('b', {
        alias: 'bail',
        type: 'boolean',
        required: false,
        default: null,
        describe: 'Enable bail'
      });
  }

  public async handler(args: yargs.Arguments) {
    HalvaRunTests(
      new HalvaTestConfig(
        args.p as string,
        null,
        args.c as string,
        args.n as string,
        args.b as boolean
      )
    );
  }
}
