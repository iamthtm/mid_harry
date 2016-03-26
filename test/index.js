/* global describe,it */
require('mocha-generators').install()

var Nightmare = require('nightmare')
var chai = require('chai')
var should = chai.should()
if (should) {}

describe('nightmareJs and mocha and chai', function () {
  var nightmare = Nightmare()

  it('ซื้อHarry Potterเล่ม 1 จำนวน 2 เล่ม,ซื้อHarry Potterเล่ม 2 จำนวน 1 เล่ม,ซื้อHarry Potterเล่ม 3 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 60', function * () {
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
  it('ซื้อHarry Potterเล่ม 1 จำนวน 1 เล่ม,ซื้อHarry Potterเล่ม 2 จำนวน 1 เล่ม,ซื้อHarry Potterเล่ม 3 จำนวน 2 เล่ม,ซื้อHarry Potterเล่ม 4 จำนวน 1 เล่มเล่มส่วนลดต้องเท่ากับ 120', function * () {
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
  it('ซื้อHarry Potterเล่ม 3 จำนวน 3 เล่ม,ซื้อHarry Potterเล่ม 4 จำนวน 4 เล่ม,ซื้อHarry Potterเล่ม 5 จำนวน 4 เล่ม,ซื้อHarry Potterเล่ม 6 จำนวน 1 เล่มส่วนลดต้องเท่ากับ 260', function * () {
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
  it('ซื้อHarry Potterเล่ม 5 จำนวน 4 เล่ม,ซื้อHarry Potterเล่ม 6 จำนวน 3 เล่ม,ซื้อHarry Potterเล่ม 7 จำนวน 6 เล่ม ส่วนลดต้องเท่ากับ 200', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')
      .click('#b5')
      .click('#b5')
      .click('#b5')
      .click('#b5')
      .click('#b6')
      .click('#b6')
      .click('#b6')
      .click('#b7')
      .click('#b7')
      .click('#b7')
      .click('#b7')
      .click('#b7')
      .click('#b7')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price.substr(1, this.price.length - 1)
      })
    case4.should.equal('200')
  })
})
