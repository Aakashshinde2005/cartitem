import React from "react";
import ContactCard from "./CotactCard";


const ContactList = (props) => {

    const delectContact = (id) => {
        props.getContactId(id);
    };

    const contacts = [
        {
            id : "1",
            "name" : "Aakash",
            "email" : "aakash@gmail.com",
        }
    ]
    
    const renderContactList = contacts.map((contact)=>{
        return (
            <ContactCard key = {contact.id} contact={contact} clickHandler={delectContact} />
        );
   
    }
    );
return(

<div className="ui called list">{renderContactList}</div>

)
};

export default ContactList;