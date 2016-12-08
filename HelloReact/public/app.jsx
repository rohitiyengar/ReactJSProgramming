var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = "Jakub Blaszczykowski";
var messageTitle = "This Is A Message"
ReactDOM.render(
    <Greeter name={firstName}/>, document.getElementById('app'));
