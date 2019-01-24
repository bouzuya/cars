import fs from 'fs';
import path from 'path';
import util from 'util';

interface Counts { [k: string]: number; }
type Counter = () => Promise<Counts>;
type Reporter = (counts: Counts) => Promise<void>;

const cars = async () => {
  const packageJsonPath = path.join(__dirname, '../package.json');
  const pkg: { dependencies?: { [k: string]: string; } } =
    JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const dependencies = Object.keys(pkg.dependencies || {});

  const counters = dependencies.filter((i) => {
    const prefix = 'cars-counter-';
    return i.startsWith(prefix) ||
      (i.startsWith('@') && i.indexOf('/' + prefix) >= 0);
  });

  const reporters = dependencies.filter((i) => {
    const prefix = 'cars-reporter-';
    return i.startsWith(prefix) ||
      (i.startsWith('@') && i.indexOf('/' + prefix) >= 0);
  });

  if (counters.length === 0 || reporters.length === 0) {
    // tslint:disable:no-console
    console.log('npm install --save <counters and reporters>');
    // tslint:enable
    process.exit(1);
    return;
  }

  // tslint:disable:no-console
  console.log('counters:  ' + util.inspect(counters));
  console.log('reporters: ' + util.inspect(reporters));
  // tslint:enable

  const counts = await counters.reduce(async (promise, counter) => {
    const cs = await promise;
    // tslint:disable:no-console
    console.log('counter: ' + counter);
    // tslint:enable
    const f: Counter = require(counter).default;
    const newCounts = await f();
    return { ...cs, ...newCounts };
  }, Promise.resolve<Counts>({}));

  await reporters.reduce(async (promise, reporter) => {
    await promise;
    // tslint:disable:no-console
    console.log('reporter: ' + reporter);
    // tslint:enable
    const f: Reporter = require(reporter).default;
    await f(counts);
  }, Promise.resolve());
};

export { cars };
export default cars;
