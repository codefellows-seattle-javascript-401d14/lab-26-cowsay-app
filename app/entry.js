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
      this.newStuff = '';
      this.meowPut = [];
      this.getMeow = function(text){
        $log.log('testing', text);
        return meowSay.say({text: text || 'meowmix meowmix please deliver', f: 'kitty'});
      };
    };
    //new section added below original for extra credit button functionality
    this.newKitty = function() {
      $log.log('New Meower meowput: ', this.newStuff);
      return meowSay.say({text: this.newStuff || 'meowmix plus', f: 'hellokitty'});
    };
    //controller for adding text using button
    this.add = function(){
      this.meowPut.push(this.userInput);
      this.newStuff = this.meowPut[this.meowPut.length - 1];
      return this.newKitty();
    };
    //controller for undoing text using button
    this.undo = function(){
      this.meowPut.pop();
      this.newStuff = this.meowPut[this.meowPut.length - 1];
      return this.newKitty();
    };
  }],
});
