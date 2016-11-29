var GreeterMessage = React.createClass({
  render: function(){
    return(
      <div>
        <h1>SOME TEXT</h1>
        <p>Some Paragraph Element</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit : function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    if(name.length > 0)
    {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <input type = "text" ref = "name"/>
          <button>Set Name</button>
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
      name: this.props.name
    };
  },
  handleNewName: function(name) {
    this.setState({
      name: name //name from state = var name
    });
  },

  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return (
       <div>
         <h1>Hello {name}!</h1>
         <p>{message + '!!'}</p>
         <GreeterMessage/>
         <GreeterForm onNewName = {this.handleNewName}/>
       </div>
     );
  }
});

var firstName = "Rohit";
var messageTitle = "This Is A Message"
ReactDOM.render(
  <Greeter name = {firstName} message = {messageTitle}/>,
  document.getElementById('app')
);
