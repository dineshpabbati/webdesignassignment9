import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import List from './List';

function Contact(){
    
      const contacts = [
        {
            id: 1,
            name: "Dinesh",
            contact: 8573767408
        },
        {
            id: 2,
            name: "Aakash",
            contact:8463989929 
        },
        {
            id: 3,
            name: "Kowshik",
            contact: 9963448737
        }
        
    ];

    return(
      <div>
      <Navbar/>
      <Content title="Contact" content="Contact Page"/>
      {contacts.map(contact => (<List
        id = {contact.id}
        name = {contact.name}
        contact = {contact.contact}
      />))}
      </div>
    )
}

export default Contact