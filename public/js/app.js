/* global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.test = 'ping'
    todoList.sumbook = []
    todoList.discountTotal = 0
    todoList.bookDiscountTotal = 0
    todoList.showTotal = 0
    todoList.add = function (id, name, price) {
      // console.log(id, name, price)
      console.log(todoList.sumbook)
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
      var bookDiscount = todoList.sumbook
      todoList.bookDiscountTotal = todoList.discount(bookDiscount)
      // เรียกfunctionมาแสดงค่า
      todoList.showTotal = todoList.TotalPrice()
    }
    // คำนวณส่วนลด
    var filterData = function (array) {
      return array.filter((element) => element.countbook !== 0)
    }
    // function Discount
    todoList.discount = function (book) {
      var items = book.map((obj) => {
        return { countbook: obj.countbook, price: obj.price }
      })
      var totalDis = 0
      while (items.length > 1) {
        var sumprice = items.reduce((sum, item) => sum + item.price, 0)
        totalDis += ((items.length - 1) / 10) * sumprice
        items = items.map((obj) => {
          return { countbook: obj.countbook - 1, price: obj.price }
        })
        items = filterData(items)
      }
      return totalDis
    }
    todoList.TotalPrice = function () {
      this.amountPrice = 0
      for (var i = 0; i < todoList.sumbook.length; i++) {
        this.amountPrice += todoList.sumbook[i].price * todoList.sumbook[i].countbook
      }
      return (this.amountPrice)
    // console.log(this.amountPrice)
    }
  })
