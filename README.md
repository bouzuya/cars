# cars: counters and reporters

A Web API server & CLI for counting and reporting your data.

# Deployment

## 1. Fork repository

[Fork it](https://github.com/bouzuya/cars/fork)

## 2. Clone your repository

```
$ username='your github username'
$ git clone git@github.com:${username}/cars
$ cd cars
```

## 3. Add your counters and reporters

e.g.

```
$ # counters
$ npm install --save bouzuya/cars-counter-hatena-bookmark
$
$ # reporters
$ npm install --save bouzuya/cars-reporter-hatena-graph
```

## 4. Commit and push to your repository.

```
$ # commit & push
$ git commit -am 'add counters and reporters'
$ git push origin master
```

## 5. Press Heroku button

Access your repository (https://github.com/${username}/cars) and press Heroku button.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## 6. Set environment variables

See: your counters & reporters document.

e.g.

- CARS_TOKEN
- HATENA_USERNAME
- HATENA_APIKEY

## 7. Add job in Heroku Scheduler console

 TASK             | DYNO | FREQUENCY
------------------|------|-----------
 $ npm run worker | 1X   | Daily

## 8. keep alive settings (optional)

You need to send a HTTP request every 10 minutes.

e.g. [Uptime Robot](https://uptimerobot.com/) or [pingdom](https://www.pingdom.com/) or [New Relic](http://newrelic.com/).

# Example

See: [bouzuya/cars-example](https://github.com/bouzuya/cars-example)

# License

## >= 0.2.0

[MIT](LICENSE)

## 0.1.0

ISC

# Author

[bouzuya][] &lt;[m@bouzuya.net][email]&gt; ([bouzuya.net][url])

[bouzuya]: https://github.com/bouzuya/
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
