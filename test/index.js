/* global describe,it */
require('mocha-generators').install()

var Nightmare = require('nightmare')
var chai = require('chai')
var should = chai.should()
if (should) {}

describe('nightmareJs and mocha and chai', function () {
  var nightmare = Nightmare()

  it('ซื้อHarry Potter ทั้งหมด 1 ภาค ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 0', function * () {
    var case2 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case2.should.equal('0')
  })
  it('ซื้อHarry Potter ทั้งหมด 2 ภาค ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 20', function * () {
    var case2 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b2')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case2.should.equal('20')
  })
  it('ซื้อHarry Potter ทั้งหมด 3 ภาค ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 60', function * () {
    var case2 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b1')
      .click('#b2')
      .click('#b3')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case2.should.equal('60')
  })
  it('ซื้อHarry Potter ทั้งหมด 4 ภาค ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 120', function * () {
    var case1 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b2')
      .click('#b3')
      .click('#b3')
      .click('#b4')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case1.should.equal('120')
  })
  it('ซื้อHarry Potter ทั้งหมด 3 ภาค ภาคละ 2 เล่ม ส่วนลดต้องเท่ากับ 120', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b1')
      .click('#b2')
      .click('#b2')
      .click('#b3')
      .click('#b3')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case4.should.equal('120')
  })
  it('ซื้อHarry Potter ทั้งหมด 5 ภาค ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 200', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b2')
      .click('#b3')
      .click('#b4')
      .click('#b5')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case4.should.equal('200')
  })
  it('ซื้อHarry Potter ทั้งหมด 5 ภาค ภาคละ 2 เล่ม ส่วนลดต้องเท่ากับ 400', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b1')
      .click('#b2')
      .click('#b2')
      .click('#b3')
      .click('#b3')
      .click('#b4')
      .click('#b4')
      .click('#b5')
      .click('#b5')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case4.should.equal('400')
  })
  it('ซื้อHarry Potter ทั้งหมด 7 ภาค ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 420', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b2')
      .click('#b3')
      .click('#b4')
      .click('#b5')
      .click('#b6')
      .click('#b7')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case4.should.equal('420')
  })
  it('ซื้อHarry Potter ทั้งหมด 3 ภาค ภาคละ 3 เล่ม ส่วนลดต้องเท่ากับ 180', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b1')
      .click('#b1')
      .click('#b2')
      .click('#b2')
      .click('#b2')
      .click('#b3')
      .click('#b3')
      .click('#b3')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case4.should.equal('180')
  })
  it('ซื้อHarry Potter ทั้งหมด 4  ภาค โดยภาคละ 3 เล่ม 1 ภาค 4เล่ม 2 ภาคและ 1 เล่ม 1 ภาค ส่วนลดต้องเท่ากับ 260', function * () {
    var case3 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b3')
      .click('#b3')
      .click('#b3')
      .click('#b4')
      .click('#b4')
      .click('#b4')
      .click('#b4')
      .click('#b5')
      .click('#b5')
      .click('#b5')
      .click('#b5')
      .click('#b6')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case3.should.equal('260')
  })
})
