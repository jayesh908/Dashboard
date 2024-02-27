import React from 'react'
const Card = () => {
    return(
    <div className='cr1'>
          <h5>26k</h5>  
          <h6>Users</h6>
    </div>
    );
}
const Card5 = () => {
    return(
    <div className='cr1' style={{background:"#3399FF"}}>
          <h5>$6.200<span>(40.9%)</span></h5> 
          <h6>Income</h6>
    </div>
    );
}
const Card6 = () => {
    return(
    <div className='cr1' style={{background:"#F9B115"}}>
          <h5>2.49<span>(84.7%)</span></h5>  
          <h6>Conversion Rate</h6>
    </div>
    );
}
const Card7 = () => {
    return(
    <div className='cr1' style={{background:"#E55353"}}>
          <h5>44k<span>(-23.6%)</span></h5>  
          <h6>Sessions</h6>
    </div>
    );
}
export{Card,Card5,Card6,Card7}