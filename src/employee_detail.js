import React from 'react';

function Edetail(props){
    return(
        <div {width=300px}>
        <ul>
            <li>Employee Name :  {props.empName}</li>
            <li>Employee Designation :  {props.empDesignation}</li>
            <li>Employee Age :  {props.empAge}</li>
        </ul>
        </div>
    );
}

export default Edetail