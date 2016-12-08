var React = require('react');
var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var update = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        if (name.length > 0) {
            this.refs.name.value = '';
            update.name = name;
        }
        if (message.length > 0) {
            this.refs.message.value = '';
            update.message = message;
        }
        this.props.onNewData(update);
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div><input type="text" ref="name" placeholder="Enter Name"/></div>
                    <br/>
                    <div><textarea ref="message" placeholder="Enter Message"/></div>
                    <br/>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
});
module.exports = GreeterForm;
