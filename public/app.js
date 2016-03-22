/* global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.test = 'ping'
    todoList.sumbook = []
    todoList.add = function (id, name, price) {
      // console.log(id, name, price)
      var book = {
        'id': id,
        'name': name,
        'price': price
      }
      // todoList.sumbook.push(book)
      // console.log(todoList.sumbook)
      // นับจำนวนหนังสือที่ซ้ำกัน
      if (todoList.sumbook.length === 0) {
        book.countbook = 1
        todoList.sumbook.push(book)
      } else {
        var checkbook = false
        for (var i = 0; i < todoList.sumbook.length; i++) {
          if (todoList.sumbook[i].id === id) {
            checkbook = true
            todoList.sumbook[i].countbook += 1
          }
        }
      }
      if (checkbook === false) {
        book.countbook = 1
        todoList.sumbook.push(book)
      }
    }
  })
