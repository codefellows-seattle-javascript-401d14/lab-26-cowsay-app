![cf](https://i.imgur.com/7v5ASc8.png) Lab26 - Intro to Angular and Webpack
======

## To Submit this Assignment
  * create a fork of this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-brian`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `.eslintrc`
  * `.gitignore`
  * `package.json`
    * create an npm `watch` script for running `webpack-dev-server --inline --hot`
    * create an npm `lint` script for linting your JS with `eslint`
  * **ignore the build directory**
  * `webpack.config.js`

## Description
* Create a cowsay application with same criteria as today's lecture demo:
* Create an **app/index.html** file that contains your HTML markup
  * *hint:* be sure to include the `ng-app` directive to point to your default angular module
* Setup an angular module and create a component for your application logic
* Your component should require in a template from **app/cowsay.html** that has an input and an pre tag for displaying cowsay's ascii art
 * the cowsay ascii art's speach bubble should be setup with two way data binding to the input
* You component should setup a controller that handles the state and logic for your cowsay template

# Testing 
* none

# Documentation
* In your README.md write a description of what angular `modules`, `components` and `controllers` are for

## Bonus
* **1pt** add a button that uses the `ng-click` directive to populate a second `pre` tag with the current `pre` tag's state
* **1pt** add a second button that uses the `ng-click` directive to undo the second `pre` tag with the last state it displayed
