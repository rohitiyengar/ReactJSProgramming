var GreeterMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit : function(e){
    e.preventDefault();
    var update = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    if(name.length > 0)
    {
      this.refs.name.value = '';
      update.name = name;
    }
    if(message.length > 0)
    {
      this.refs.message.value = '';
      update.message = message;
    }
    this.props.onNewData(update);
  },
  render: function(){
    return(
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <div><input type = "text" ref = "name" placeholder = "Enter Name"/></div> <br/>
          <div><textarea ref = "message" placeholder = "Enter Message"/></div> <br/>
          <div><button>Submit</button></div>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function()
  {
    return{
      name: "React",
      message: "This is from the component"
    };
  },
  getInitialState: function()
  {
    return{
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(update) {
    this.setState(update);
  },

  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
       <div>
         <GreeterMessage name = {name} message = {message}/>
         <GreeterForm onNewData = {this.handleNewData}/>
       </div>
     );
  }
});

var firstName = "Rohit";
var messageTitle = "This Is A Message"
ReactDOM.render(
  <Greeter name = {firstName} />,
  document.getElementById('app')
);
