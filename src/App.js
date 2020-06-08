import React from 'react';
import './App.css';
import MyComponent from './myComponent';


function App() {
  return (
    <div className="App">
   {/* <MyComponent /> */}
   <MyComponent dishName="Qorma" sweetDish="Gajar Ka Halwa"></MyComponent>
   <hr/>
   <MyComponent dishName="Biryani" sweetDish="Kheer"></MyComponent> 
   <hr/>
   <MyComponent dishName="Karahi" sweetDish="Casturd"></MyComponent>   
   </div>
  );
}

export default App;
