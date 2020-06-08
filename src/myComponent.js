import React from 'react';

function MyComponent(props){
    return(
        <div>
        <h1>Employess Listing</h1>
        <ul>
            <li>Employee Name :  {props.empName}</li>
            <li>Employee Designation :  {props.empName}</li>
            <li>Employee Age :  {props.empName}</li>
        </ul>
        
        </div>
    )

}

export default MyComponent;