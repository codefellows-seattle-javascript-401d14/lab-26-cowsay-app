'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('cowsayApp', [])
.component('cowsay', {
  template: require('./cowsay.html'),
  controller: ['$log', function($log){
    this.$onInit = function(){
      this.title = 'cowsay app';
      this.userInput = '';
      this.update = function(input) {
        return cowsay.say({ text: input || 'moooooooo', f: this.current });
      };
      this.undo = function() {
        this.history.pop();
        this.spoken = this.history.pop() || '';
      };
      this.getCow = function(text){
        $log.log('test was', text);
        return cowsay.say({text: text || 'Hello friend.'});
      };
    };
  }],
});
