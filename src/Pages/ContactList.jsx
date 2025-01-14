import React from 'react'

const ContactList = ({contacts, editContact, deleteContact}) => {

    

  return (
    <div>
        {contacts.length>0?(

        contacts.map(contact => (
    
       <div key={contact.id} className='bg-white shadow-md rounded p-4 mb-4 flex items-center justify-between'> 
        <h3 className='text-xl font-bold'>{contact.name}</h3>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        {contact.image && <img src='{contact.image}' alt='{contact.name}' width="100"/>}
        <button onClick={() => editContact(contact)} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2'>Edit</button>
        <button onClick={() => deleteContact(contact.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2'>Delete</button>
        </div>
    ))
) :(
    <p className='text-center text-gray-500 '>No contacts avilable. Add a new contact</p>
)}

    </div>
  )
}

export default ContactList