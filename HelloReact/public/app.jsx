var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./Components/Greeter');

var firstName = "Rohit";
var messageTitle = "This Is A Message"
ReactDOM.render(
    <Greeter name={firstName}/>, document.getElementById('app'));
