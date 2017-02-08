'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('beerApp', [])
.component('cowsay', {
  template: require('/cowsay.html'),
  controller: ['$log', function($log) {
    this.$onInt = function() {
      this.title = 'Cow Beer App';
      this.userInput = '';
      this.getCow = function(text) {
        $log.log('whatever', text);
        return cowsay.say({text: text || 'Feed me beer!'});
      };
    };
  }],
});
