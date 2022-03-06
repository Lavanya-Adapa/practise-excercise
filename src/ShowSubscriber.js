import React,{Component}from 'react';
import './ShowSubscriber.css';
import {Link} from 'react-router-dom';
import Header from './Header';
class ShowSubscriber extends Component{ 
  render(){
   
    // let subscribers=[
    //   {
    //     id:1,
    //     name:'Lavanya',
    //     phone:'7680967125'
    //   },
    // {
    //   id:2,
    //   name:'Jyothi',
    //   phone:'9030897228'
    // },
    // {
    //   id:3,
    //   name:'Karthik',
    //   phone:'9652614979'
    // }
    
    // ]
  return (
    <div>
      <Header heading="Phone Directory"/>
      <div className='component-body-container'>
     <Link to='/add'><button className='custom-btn add-btn'>Add</button></Link>
      <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          </div>
          {
      this.props.subscriberListToShow.map(sub => {
        return <div key={sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.phone}</span>
          <span className='grid-item'><button className='custom-btn delete-btn'>Delete</button></span>
          </div>
      })
    }
    </div>
  );
}
}

export default ShowSubscriber;
