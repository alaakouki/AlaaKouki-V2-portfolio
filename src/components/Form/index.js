import React, {useState} from "react";
import './style.css';

import validateEmail from "../../utils/helpers";


// function Form() {

//     // const [] = ;
//     const [email, setEmail] = useState("");
//     // const [] = ;
//     const [errorMessage, setErrorMessage] = useState("");




// }

// export default Form;


function ContactForm() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, name, and message
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
      if (!validateEmail(email)) {
        setErrorMessage('Your email is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // To make sure all fields are not empty
      } else if (!email) {
        setErrorMessage("Email is required");
        return;
      } else if (!name) {
        setErrorMessage("Name is required");
        return;
      } else if (!message) {
        setErrorMessage("Message is required");
        return;
      }
      alert(`Thanks ${name}`);
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <div>
        <form className="form">
            <lebel>
                Name:
            </lebel>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
              />
              <lebel>
                  Email address:
              </lebel>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            />
            <lebel>
                Message:
            </lebel>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default ContactForm;