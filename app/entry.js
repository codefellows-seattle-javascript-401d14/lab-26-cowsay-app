'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('demoApp', [])
.component('cowsay', {
  template: require('./cowsay.html'),
  controller: ['$log', function($log){
    this.$onInit = function(){
      this.title = 'Cow chatting';
      this.getCowText = function(text) {
        $log.log('the text says ', text);
        return cowsay.say({text: text || 'Got milk?'});
      };
    };
  }],
});
