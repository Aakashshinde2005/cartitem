import React from "react";
import trash from "../images/itrash.svg";

const ContactCard = (props) => {
    const {id,name,email} = props.contact;

    return (
        <ul>
        <li key ={id}>
                <div className="content" >
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <img src={trash} onClick={() => props.clickHandler(id)} alt = "trash"></img>
            </li>
            </ul>
    );

}

export default ContactCard;