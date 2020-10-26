import React from 'react';
import ReactDom from 'react-dom';


/*
  var div = React.createElement('div',{name:'name'},'这是div22');
  ReactDom.render(div, document.getElementById('app'))
*/
/* var lis = [];
for(var i=0;i<10;i++){
  var li = <li key={i}>item-{i}</li>
  lis.push(li)
}
var div = <div name="name">
  这是div222
  <ul>
    {lis}
  </ul>
</div>
ReactDom.render(div, document.getElementById('app')) */

function Hello(){
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  )
}
ReactDom.render(<Hello></Hello>, document.getElementById('app')) */


/* class DivCompoent extends React.Component{
  render(){
    return (
      <>
        <div>
          这是div333
        </div>
      </>
    );
  }
}
ReactDom.render(<DivCompoent />, document.getElementById('app')) */