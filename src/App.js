import React,{Component}from 'react';
import './App.css';
import Header from './Header';
class App extends Component{ 
 
  render(){
    let subscribers=[
      {
        id:1,
        name:'Lavanya',
        phone:'7680967125'
      },
    {
      id:2,
      name:'Jyothi',
      phone:'9030897228'
    },
    {
      id:3,
      name:'Karthik',
      phone:'9652614979'
    }
    
    ]
  return (
    <div>
      <Header/>
      <div className='component-body-container'>
      <button className='custom-btn add-btn'>Add</button>
      <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          </div>
          {
      subscribers.map(sub => {
        return <div key={sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.phone}</span>
          </div>
      })
    }
    </div>
  );
}
}

export default App;
