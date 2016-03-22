/* global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.test = 'ping'
  })
