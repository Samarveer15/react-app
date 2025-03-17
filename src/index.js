import React from 'react';
import ReactDOM from 'react-dom/client';
//first activity -4
/*class Customer extends React.Component{
  render(){
    return <h2> I am from {this.props.city
  }</h2>;
}
}
class Details extends React.Component{
  render(){
    return (
      <div>
        <h1>hello</h1>
        <Customer city="Chennai"/>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Details />);*/
// Second Activity
/*class Customer extends React.Component{
  render(){
    return <h2> I am from {this.props.city
  }</h2>;
}
}
class Details extends React.Component{
  render(){
    const cityname= "AMIRTSAR";
    return (
      <div>
        <h1>hello</h1>
        <Customer city= {cityname}/>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Details />);*/

// Third Activity
/*class Customer extends React.Component{
  render(){
    return <h2> I am from {this.props.customerDetails.country
  }</h2>;
}
}
class Details extends React.Component{
  render(){
    const customerinfo= {city: 'Banglore', country:'India'};
    return (
      <div>
        <h1>hello</h1>
        <Customer customerDetails= {customerinfo}/>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Details />);*/

//fourth activity 
class Customer extends React.Component{
 constructor(props){
    super (props);
    this.info = {location:"Tamil Nadu"};
  }
  render(){
    return <h2> I am from {this.props.city},{this.info.location}!</h2>;
  }
}

class Details extends React.Component{
  render(){
    return (
      <div>
        <h1>hello</h1>
        <Customer city="Chennai"/>
        </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Details />);