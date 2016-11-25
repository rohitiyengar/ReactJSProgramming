var Greeter = React.createClass({
  getDefaultProps: function()
  {
    return{
      name: "React",
      message: "This is from the component"
    };
  },
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return (
      //Uncomment and clean up for React.createElement
    //React.createElement(
        //'h1',
        //null,
        //'Hello Fun'
      //)
       <div>
         <h1>Hello {name}!</h1>
         <p>{message}</p>
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
