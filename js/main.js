"use strict";

//async function with await and fetch
var fetchAsync = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://jsonplaceholder.typicode.com/todos/1');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchAsync() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

fetchAsync().then(function (data) {
  return console.log(data);
}).catch(function (reason) {
  return console.log(reason.message);
});

//Object Destructing

var movieName = { name: "PK", actor: "Amir Khan" };
var foo = movieName.name,
    bar = movieName.actor;


console.log(foo);
console.log(bar);

//Object Shorthand

var cat = 'Miaow';
var dog = 'Woof';
var bird = 'Peet peet';

var someObject = {
  cat: cat,
  dog: dog,
  bird: bird
};

console.log(someObject);