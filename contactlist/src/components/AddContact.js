import React,{ useState } from "react";


const AddContact = (props) => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");

    const Add = (e) => {
        e.preventDefault();
        if (name === "" || email===""){
        alert("fill Mandatory");
        return;
        }
        props.addContactHandler(name,email);
        setName("");
        setEmail("");
       

    }

return(
    <div className="ui main">
        
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={Add}>

        <div className="field">
        <label>Name</label>
        <input type = "text" 
        name ="name" 
        placeholder="Name" 
        value ={name} 
        onChange={(e)=> setName(e.target.value)}/>
        </div>

        <div className="field">
        <label>Email</label>
        <input type = "text" 
        name ="email" 
        placeholder="Email" 
        value ={email} 
        onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <button className="ui button blue">Add</button>
        </form>
    </div>
  
)

}

export default AddContact;
