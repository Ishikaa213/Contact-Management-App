import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ContactForm = ({addContact, updateContact, selectedContact}) => {
    const [contact, setcontact] = useState({name:"" , phone:"" , email:"" , image:""});

    useEffect(()=>{
      if (selectedContact){
        setcontact(selectedContact);
      }
    }, [selectedContact])
    
    const handleChange = (e)=>{
      
       setcontact({...contact, [e.target.name]: e.target.value});
    }
    const handleImageUpload = async (e)=>{
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file' , file);
        formData.append('upload_preset', 'your_upload_preset');
      // try {
      //   const response = await  axios.post(
      //     `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`,
      //     formData
      //   );
      // } catch (error) {
      //   console.log('Error uploading image:', error);
        
      // }
    };

    const handleSubmit =(e)=>{
      e.preventDefault();
      if(selectedContact){
        updateContact(contact);
      } else {
        addContact({...contact , id: Date.now()});
      }
      
      setcontact({name:'' , phone:'' , email:'' , image:''})

    }


  return (
    <>
    <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' ><br />
        <input className='mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 lending-tight focus:outline-none focus:shadow-outline' type="text" name='name' placeholder='Name' value={contact.name} onChange={handleChange} required /> <br /> 
        <input className='mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 lending-tight focus:outline-none focus:shadow-outline' type="number" name='phone' placeholder='Phone No.' value={contact.phone} onChange={handleChange} required /> <br />
        <input className='mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 lending-tight focus:outline-none focus:shadow-outline' type="email" name='email' placeholder='Email' value={contact.email} onChange={handleChange} required /> <br />
        <input className='mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 lending-tight focus:outline-none focus:shadow-outline' type="File" onChange={handleImageUpload}    /> <br />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Add Contact</button>
    </form>
    </>
    

   
  )
}

export default ContactForm