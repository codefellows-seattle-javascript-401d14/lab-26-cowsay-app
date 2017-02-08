'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('cowApp', [])
.component('cowsay', {
  template: require('./cowsay.html'),
  controller: ['$log', function($log) {
    this.$onInit = function() {
      this.title = 'cowsaywhat app';
      this.userInput = '';
      this.saying = '';
      let inputArr = [];
      this.getCow = function(text) {
        $log.log('test was', text);
        return cowsay.say({text: text || 'You have failed me for the last time!', f:'vader-koala'});
      };
      this.copyCat = function() {
        $log.log('copycat says', this.saying);
        return cowsay.say({text: this.saying || 'meow', f: 'meow'});
      };
      this.currentState = function() {
        inputArr.push(this.userInput);
        this.saying = inputArr[inputArr.length - 1];
        return this.copyCat();
      };
      this.prevState = function() {
        inputArr.pop();
        this.saying = inputArr[inputArr.length - 1];
        return this.copyCat();
      };
    };
  }],
});
