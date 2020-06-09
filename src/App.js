import React from 'react';
import './App.css';
import Employee from './employee';
import Edetail from './employee_detail';


function App() {
  return (
    <div className="App">
   {/* <Employee /> */}
   <Employee compName="XYZ"></Employee> 
   <Edetail empName="Ali" empDesignation="Software Developer" empAge="35"></Edetail>
   <Edetail empName="Sohail" empDesignation="Accountant" empAge="31"></Edetail>
   <Edetail empName="Yasir" empDesignation="Designer" empAge="24"></Edetail>
   </div>
  );
}

export default App;
