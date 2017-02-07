'use strict';

const angular = require('angular');
const meowSay = require('cowsay-browser');

angular.module('meowApp', [])
.component('meowsay', {
  template: require('./meowsay.html'),
  controller: ['$log', function($log){
    this.$onInit = function(){
      this.title = 'Meow, meow, meow';
      this.userInput = '';
      this.getMeow = function(text){
        $log.log('testing', text);
        return meowSay.say({text: text || 'meowmix meowmix please deliver', f: 'kitty'});
      };
    };
  }],
});
