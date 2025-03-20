import React from 'react';
import ReactDOM from 'react-dom/client'; 
class Customer extends React.Component{
 constructor(props){
    super (props);
    this.info = {location:"Uttar Pradesh"};
  }
  render(){
    return <h2> I am from {this.props.city},{this.info.location}!</h2>;
  }
}

class Details extends React.Component{
  render(){
    return (
      <div>
        <h1>Hello</h1>
        <Customer city="Noida"/>
        </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Details />);