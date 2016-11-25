var Greeter = React.createClass({
  getDefaultProps: function()
  {
    return{
      name: "React"
    };
  },
  render: function(){
    var name = this.props.name;
    return (
      //Uncomment and clean up for React.createElement
    //React.createElement(
        //'h1',
        //null,
        //'Hello Fun'
      //)
       <div>
         <h1>Hello {name}!</h1>
         <p>This is from a component</p>
       </div>
     );
  }
});


ReactDOM.render(
  <Greeter name = "Rohit"/>,
  document.getElementById('app')
);
