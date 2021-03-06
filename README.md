# cars: counters and reporters

A Web API server & CLI for counting and reporting your data.

## Example

See: [bouzuya/cars-example](https://github.com/bouzuya/cars-example)

## Usage

### 1. Fork repository

[Fork it](https://github.com/bouzuya/cars/fork)

### 2. Clone your repository

```
$ username='your github username'
$ git clone git@github.com:${username}/cars
$ cd cars
```

### 3. Add your counters and reporters

e.g.

```
$ # counters
$ npm install --save bouzuya/cars-counter-hatena-bookmark
$
$ # reporters
$ npm install --save bouzuya/cars-reporter-hatena-graph
```

### 4. Commit and push to your repository.

```
$ # commit & push
$ git commit -am 'add counters and reporters'
$ git push origin master
```

### 5. Press Heroku button

Access your repository (https://github.com/${username}/cars) and press Heroku button.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### 6. Set environment variables

See: your counters & reporters document.

e.g.

- CARS_TOKEN
- HATENA_USERNAME
- HATENA_APIKEY

### 7. Add job in Heroku Scheduler console

 TASK             | DYNO | FREQUENCY
------------------|------|-----------
 $ npm run worker | 1X   | Daily

## Badges

[![npm version][npm-badge-url]][npm-url]
[![Travis CI][travisci-badge-url]][travisci-url]
[![Coveralls][coveralls-badge-url]][coveralls-url]

[coveralls-badge-url]: https://img.shields.io/coveralls/github/bouzuya/cars.svg
[coveralls-url]: https://coveralls.io/github/bouzuya/cars
[npm-badge-url]: https://img.shields.io/npm/v/bouzuya/cars.svg
[npm-url]: https://www.npmjs.com/package/@bouzuya/cars
[travisci-badge-url]: https://img.shields.io/travis/bouzuya/cars.svg
[travisci-url]: https://travis-ci.org/bouzuya/cars

## License

### >= 0.2.0

[MIT](LICENSE)

### 0.1.0

ISC

## Author

[bouzuya][name] &lt;[m@bouzuya.net][email]&gt; ([https://bouzuya.net/][url])

[name]: https://github.com/bouzuya/
[email]: mailto:m@bouzuya.net
[url]: https://bouzuya.net/
