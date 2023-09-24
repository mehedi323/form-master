 
const Home = () => {

  const handleSubmit = e =>{
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  }
  return (
    <div className="text-3xl text-red-300 font-bold rounded-lg bg-yellow-300">
      <h2>This is a Home Pages</h2>
      <form onSubmit={handleSubmit}>
        <input className="bg-red-300 rounded-lg text-purple-400" type="text" name="name" id="" />
        <br />
        <br />
        <input className="bg-red-300 border-3 rounded-lg text-purple-400 border-sky-700" type="email" name="email" id="" />
        <br />
        <input  type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;