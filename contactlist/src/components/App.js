import React,{useState,useEffect} from "react";
import Header from './Header';
import { BrowserRouter as Router,Route } from "react-router-dom";
import AddContact from "./AddContact";


function App() {
  
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts]= useState([]);

  const addContactHandler = (uName,uEmail) => {
    setContacts((prevContacts) => {
      return[
      ...prevContacts,
      { name: uName, email: uEmail,id:Math.random().toString()}, 
      ];
    });
  }
  
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect (()=> {
    const retrieveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveData) setContacts(retrieveData);
  },[]);

  useEffect (()=> {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header />
      <Route Path="/" component = {AddContact} />
     

      
      </Router> 
        
        
    </div>
  );
}

export default App;
