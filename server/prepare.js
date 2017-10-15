require('shelljs/global');
if (!which('mongod')) {
   echo('sorry,check you has installed mongodb');
   exit(1);
}

var argv = require('yargs')
  .option('n', {
    alias : 'name',
    demand: true,
    default: 'mongodb',
    describe: 'start mongodb or redis locally',
    type: 'string'
  })
  .usage('Usage: npm run start:[options]')
  .example('npm run start:mongodb')
  .help('h')
  .alias('h', 'help')
  .argv;

if (argv.n === 'mongodb') {
  if (exec('sudo mongod').code !== 0) {
     echo('error: start mongodb fail');
     exit(1);
  }
  echo('start mongodb success /n');
} else if (argv.n === 'redis') {
  cd('/usr/local/redis-4.0.2/src');
  if (exec('sudo ./redis-server').code !== 0) {
     echo('error: start redis-server fail');
     exit(1);
  }
  echo('start redis-server success')
}
