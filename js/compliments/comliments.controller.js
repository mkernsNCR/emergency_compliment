`use strict`;

(function(){
  var app = angular.module("compliments");
  app.controller("mainController", mainController);

  function MainController(){
    var vm = this;
    var randomIndex = Math.floor(Math.random() * data.length)
   vm.data = data[randomIndex];
  }

}());
