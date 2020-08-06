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
        describe: 'Path to test folder',
        array: true
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
      })
      .option('d', {
        alias: 'debug',
        type: 'boolean',
        required: false,
        default: true,
        describe: 'Wite debug info'
      })
      .option('t', {
        alias: 'timeout',
        type: 'number',
        required: false,
        default: 0,
        describe: 'Timeout time for test'
      });
  }

  public async handler(args: yargs.Arguments) {
    HalvaRunTests(
      new HalvaTestConfig(
        args.p as string[],
        null,
        args.c as string,
        args.n as string,
        args.b as boolean,
        args.t as number
      )
    );
  }
}
