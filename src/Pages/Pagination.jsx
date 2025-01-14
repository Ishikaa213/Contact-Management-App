import React from 'react'

const Pagination = ({totalContacts , contactsPerPages, Paginate}) => {
    const pageNumbers =[];
    

    for(let i =1; i<=Math.ceil(totalContacts/contactsPerPages); i++){
        pageNumbers.push(1);
    }
  return (
    <>
   
   <nav className='flex justify-center mt-4'>
     <ul className='inline-flex -space-x-px'>
        {pageNumbers.map(number =>(
            <li key={number} className='page-items'>
                <a onClick={()=> Paginate(number)}  href="#!" className='py-2 px-3 lending-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>
                    {number}
                </a>

            </li>
        ))}
     </ul>
   </nav>
   </>
   
  )
}


export default Pagination