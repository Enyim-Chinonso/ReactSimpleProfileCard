
// import React, { useState } from 'react';
// import UserInputs from './UserInputs';
// import TextArea from './TextArea';
// import CarSelect from './CarSelect';

// function App() {
//   const [inputs, setInputs] = useState({});
//   const [textarea, setTextarea] = useState("These contents belong to the textarea.");
//   const [myCar, setMyCar] = useState("Volvo");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Inputs:", inputs);
//     console.log("Textarea:", textarea);
//     console.log("Selected Car:", myCar);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <UserInputs inputs={inputs} setInputs={setInputs} />
//       <br />
//       <TextArea textarea={textarea} setTextarea={setTextarea} />
//       <br />
//       <CarSelect myCar={myCar} setMyCar={setMyCar} />
//       <br />
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }


import react from 'react';
import UserInputs from "./Components/UserInputs";
import TextArea from './Components/Textarea';
import CarSelect from "./Components/CarSelect";
import React from 'react';
import ProfileCard from './Components/ProfileCard';
import "./ProfileCard.css"
  // import ProfileCard from './Components/ProfileCard';

// function App() {
//   return (
//     <div>
//       <UserInputs />
//       <TextArea />
//       <CarSelect />
//     </div>
//   );
// }





const App = () => {
  return (
    <>
      {/* <Header /> */}
      <ProfileCard />
    </>
  )
}

export default App;
