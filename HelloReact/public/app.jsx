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
  onButtonClick: function(e) {
    e.preventDefault(); // Prevents refreshing of page each time form is submitted.
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';
    if(typeof name === 'string' && name.length > 0)
    {
      this.setState({
        name: name //name from state = var name
      });
    }
  },

  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return (
       <div>
         <h1>Hello {name}!</h1>
         <p>{message + '!!'}</p>
         <GreeterMessage/>
         
         <form onSubmit = {this.onButtonClick}>
           <input type = "text" ref = "name"/>
           <button>Set Name</button>
         </form>
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
