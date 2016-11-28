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

    var name = this.refs.name.value;
    alert(name);
  },

  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return (
      //Uncomment and clean up for React.createElement --> babeljs.io/repl
    //React.createElement(
        //'h1',
        //null,
        //'Hello Fun'
      //)
       <div>
         <h1>Hello {name}!</h1>
         <p>{message + '!!'}</p>

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
