var React = require('react');
var ReactDOM = require('react-dom');
var obj1 = {
  name: 'Rohit',
  location: 'Bentonville'
};

var obj2 = {
  age: 27,
  ...obj1
};

console.log(obj2);

ReactDOM.render(
    <h1>Boilerplate App</h1>,
    document.getElementById('app'));
