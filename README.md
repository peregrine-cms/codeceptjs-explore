# CodeceptJS Sample How-To

This project was used by me (Gaston) while ramping-up on CodeceptJS.
These are my notes, so no warranty is provided.

Goals:
* Quickly ramp-up on CodeceptJS
* Create a simple, yet useful test (i.e. log into Peregrine)
* Run tests locally
* Run tests on Docker
* Record test run 


## Run Tests Locally

1. Run tests on your machine.

```
$ npx codeceptjs run --steps
```


2. Run tests with Docker.

```
$ docker run --net=host -v $PWD:/tests codeception/codeceptjs
```

## Record Tests with Docker

```
$ ./docker-build.sh
$ ./docker-run.sh
```


## How This Project Was Created

This project was bootstrapped using the following instructions.

1. Create a workspace.

```
$ mkdir codeceptjs-explore && cd codeceptjs-explore
```

2. Install CodeceptJS and Puppeteer.

```
$ npm init -y
$ npm install codeceptjs puppeteer --save-dev
```

3. Create a CodeceptJS project.

```
$ npx codeceptjs init
```

All the defaults were used, except for these changes:

* What helpers do you want to use?: Puppeteer
* [Puppeteer] Base url of site to be tested: http://localhost:8080
* Feature which is being tested: Peregrine Login

4. Start Peregrine locally in another terminal.

5. Edit `login_test.js`. 

```
Feature('login');
  
Scenario('Log into Peregrine', (I) => {
  I.amOnPage('/');
  I.see('Log In');
  I.fillField('Username', 'admin');
  I.fillField('Password', 'admin');
  I.click('Log In');
  I.see('your websites');
});
```

6. To run tests on your machine with Docker, add `--no-sandbox` argument to `codecept.conf.js`. See [issues/1022](https://github.com/codecept-js/CodeceptJS/issues/1022).

```
Puppeteer: {
...
    chrome: {
        ...
        args: ['--no-sandbox']
    }
}
```
