'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');
console.log('hello world from webpack');
angular.module('kencowApp', [])
.component('cowsay', {
  template: require ('./cowsay.html'),

  controller: ['$log', function ($log) {
    this.$onInit = function (){
      this.title = 'cowsay app';
      this.name = 'ken';
      this.userInput = '';
      this.getCow = function (text) {
        $log.log('======>', text);
        return cowsay.say({text: text || 'say something funny'});
      };

    };

  }],
});
