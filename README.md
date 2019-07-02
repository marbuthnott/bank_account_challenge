# Bank Tech Test

## INTRODUCTION

This project was used to simulate a tech test with a focus on OO design and TDD skills to produce good code with minimal time pressure.

Project criteria:

* Given a client makes a deposit of 1000 on 10-01-2012
* And a deposit of 2000 on 13-01-2012
* And a withdrawal of 500 on 14-01-2012
* When she prints her bank statement
* Then she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

Here's a [link](https://github.com/makersacademy/skills-workshops/tree/master/process_review/exercises/bank) to the full project spec.

As a break from the norm I decided to complete this project in Javascript.

## GETTING STARTED

* clone this repo
* `cd bank_tech_test` to go to the application root
* `npm install` to install all dependencies

## HOW TO USE

SETTING UP:
* run `node` from the project root
* run `.load ./lib/bank.js` to load the file
* run `bank = new Bank();` to create a new bank object

DEPOSIT/WITHDRAWAL:
* to make a deposit for £2000 run `bank.deposit(2000);`
* to make a withdrawal of £500 run `bank.withdrawal(500);`

PRINT STATEMENT:
* to view your full statement run `bank.printBankStatement();`

## TESTING

100% test coverage through Jest.

* `npm run test` to run the tests
* `npm run coverage` to get jest coverage

## TECH/FRAMEWORK USED

**Primary programming language:** *Javascript*

**Testing framework:** *Jest* and *Jasmine*. Jest is a delightful Javascript testing framework with a focus on simplicity. Originally developed for use with React. Jest [docs](https://jestjs.io/). The tests themselves are written in accordance with the Jasmine testing framework. An [intro to Jasmine syntax](https://jasmine.github.io/2.0/introduction).

**Linter:** *ESLint* was used. ESLint is fully pluggable tool for identifying and reporting on patterns in JavaScript. ESLint [docs](https://eslint.org/).

## APPROACH

Running tests via the terminal was unfamiliar territory, all previous Javascript projects have been run through the browser. As a result I spent a lot of time setting up the project and becoming familiar with ESLint to check code quality and Jest for all testing. Partly down to being unsure how to work with Jest I spent around 4 hours on this project.

If I came at this project again I would focus more on Single Responsibility Principle by splitting the program into a `Transaction` class to handle the logic, and a `BankAccount` class to handle interaction with the user and printing of the statement.

I would also try to adopt a different method of declaring functions, specifically, the Arrow function. [Blog on JavaScript function declaration](https://medium.com/@ajmeyghani/javascript-functions-a-pocket-reference-d42597ceb496).
