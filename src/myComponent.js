import React from 'react';

function MyComponent(props){
    return(
        <div>
        <h1>Today we are serving {props.dishName}</h1>
        <h1>and also {props.sweetDish}.</h1>
        </div>
    )

}

export default MyComponent;