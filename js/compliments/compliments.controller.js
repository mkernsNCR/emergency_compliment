`use strict`;

(function(){
  var app = angular.module("emergencyComp");
  app.controller("emergencyController", emergencyController);

  function emergencyController(){
    var vm = this;
    var randomIndex = Math.floor(Math.random() * data.length)
    vm.data = data[randomIndex];
    console.log(this);
  }

}());
