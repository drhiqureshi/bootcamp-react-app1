import React from 'react';
import './App.css';
import MyComponent from './myComponent';


function App() {
  return (
    <div className="App">
   {/* <MyComponent /> */}
   <MyComponent empName="Ali" empDesignation="Software Developer" empAge="37"></MyComponent>
   <hr/>
   <MyComponent empName="Yasir" empDesignation="Designer" empAge="22"></MyComponent> 
   <hr/>
   <MyComponent empName="Khurrum" empDesignation="Acountant" empAge="32"></MyComponent>   
   </div>
  );
}

export default App;
