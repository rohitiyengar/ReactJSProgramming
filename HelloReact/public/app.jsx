var Greeter = React.createClass({
  render: function(){
    return React.createElement(
        'h1',
        null,
        'Hello Fun'
      )
      // <div>
      //   <h1>Hello World!</h1>
      //   <p>This is from a component</p>
      // </div>

  }
});


ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
