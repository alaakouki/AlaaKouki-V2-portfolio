import React from 'react';
import ContactForm from '../Form/index';


export const Contact = () => {
  return (
    <div className='contactContainer'>
      <h1>Contact</h1>
      
      <ContactForm/>
      <p>
      You can also reach me through:
      </p>
      <ul>
        <li>Email : alaakouki@hotmail.com</li>
        <li>Mobile: +1 206-688-9028</li>
      </ul>
      
    </div>
  );
}