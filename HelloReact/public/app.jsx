var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./Components/GreeterMessage');
var GreeterForm = require('./Components/GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {name: "React", message: "This is from the component"};
    },
    getInitialState: function() {
        return {name: this.props.name, message: this.props.message};
    },
    handleNewData: function(update) {
        this.setState(update);
    },

    render: function() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

var firstName = "Rohit";
var messageTitle = "This Is A Message"
ReactDOM.render(
    <Greeter name={firstName}/>, document.getElementById('app'));
