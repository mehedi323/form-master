 
const SimpleForm = () => {
  const handleSubmit = e =>{ 
    e.preventDefault()

    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  }
  
  return (
    <div  >
      <form onSubmit={handleSubmit} className="text-3xl text-red-400">
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="phone" name="phone" id="" />
        <br /> 
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;