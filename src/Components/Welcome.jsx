import React from 'react';


// function Welcome (props) {
//  if (props.isLoggedIn) {
//     return <h1>Welcome back!</h1>;
//  } else {
//     return <h1>Please Sign up!</h1>
//  }
// }

// function Welcome(props) {
//    return (
//      <div>
//        {props.isLoggedIn && <h1>Welcome back!</h1>}
//      </div>
//    );
//  }

function Welcome(props) {
   return (
     <div>
       {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
     </div>
   );
 }
 
 

export default Welcome;