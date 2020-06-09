import React from 'react';

function Edetail(props){
    return(
        <div>
        <ul>
            <li>Employee Name :  {props.empName}</li>
            <li>Employee Designation :  {props.empDesignation}</li>
            <li>Employee Age :  {props.empAge}</li>
        </ul>
        </div>
    );
}

export default Edetail