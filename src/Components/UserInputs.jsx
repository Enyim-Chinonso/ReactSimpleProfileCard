import { useState } from "react";

const UserInputs = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Enter your name: <br />
        <input type="text" name='username' value={inputs.username || ""} onChange={handleSubmit} />
        </label> <br />

        <label>Enter your age: <br />
          <input type="number" name='age' value={inputs.age || ""} onChange={handleSubmit} />
        </label> <br /> <br />

       <input type="submit" />
    </form>
  );
}

export default UserInputs;