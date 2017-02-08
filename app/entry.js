'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('demoApp', [])
.component('cowsay', {
  template: require('./cowsay.html'),
  controller: ['$log', function($log){
    this.$onInit = function(){
      this.title = 'I talk like a cow';
      this.userInput = '';
      this.history = [];
      this.currentCow = '';

      this.saveCow = function(){
        this.history.push(this.getCow(this.userInput));
        this.currentCow = this.history[this.history.length -1];

      };
      this.undoCow = function(){
        this.history.pop();
        this.currentCow = this.history[this.history.length -1];
      };


      this.getCow = function(text){
        $log.log('test was', text);
        return cowsay.say({text: text || 'irvine says weird stuff'});
      };
    };
  }],
});
