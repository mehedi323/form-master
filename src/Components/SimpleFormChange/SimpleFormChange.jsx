import { useState } from "react";

 
const SimpleFormChange = () => {

  const [name, setName ] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword]= useState();

  const handleSubmit = e =>{
    e.preventDefault();
    console.log(name, email, password)
  }
  const handleSubmitName = e =>{
    setName(e.target.value)
  } 
  const handleSubmitEmail = e =>{
    setEmail(e.target.value)
  }

  const handleSubmitPassword= e =>{
    setPassword(e.target.value)
  }

  return (
    <div>
       <div className="text-3xl text-red-300 font-bold rounded-lg bg-yellow-300">
      <h2>This is a Home Pages</h2>
      <form onSubmit={handleSubmit}>
        <input className="bg-red-300 rounded-lg text-purple-400"
        onChange={handleSubmitName}
        type="text" name="name" id="" />
        <br />
        <br />
        <input className="bg-red-300 border-3 rounded-lg text-purple-400 border-sky-700"
        onChange={handleSubmitEmail}
        type="email" name="email" id="" />
        <br />
        <br />
        <input className="bg-red-300 border-3 rounded-lg text-purple-400 border-sky-700"
        onChange={handleSubmitPassword}
        type="password" name="Password" id="" />
        <br />
        <input  type="submit" value="Submit" />
      </form>
    </div>
    </div>
  );
};

export default SimpleFormChange;