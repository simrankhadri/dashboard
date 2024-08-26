import React from 'react'
import './Contact.css'
import messages from '../../assests/messages.png'
import phone  from '../../assests/phone.png'
import location from '../../assests/location.png'
import submit from '../../assests/submit.png'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key","2bc4250a-454c-4ca5-b325-555590c3e4b4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
    <div className='contact'>
        <div className="contact-col">
                
            <h3>CONTACT US </h3>
          <p>
                Feel free reach out through contact form or find our contact information below.Your feedback
                ,questions,suggestion are important to us as we strive to provide exceptional service to our
                community.
            </p>
            <ul>
                <li> <img src={messages} alt="" /> tsandeep174@gmail.com </li>
                <li> <img src={phone} alt="" /> 123456789 </li>
                <li> <img src={location} alt="" />3rd floor, survey No. 123/1 ITPL Main Road, AECS Layout, Brookfield, Bangalore, Karnataka - 560037 </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your Name</label>
                <input type="text"  name ='name' placeholder='Enter your name'
                required/>
                <label>Phone Number </label>
                <input type='tel' name='phone' placeholder='Enter your phone'
                required/>
                <label>
                    Write your message here
                </label>
                <textarea name='message'  rows='6' placeholder='Enter your message' required></textarea>
                <button type='Submit' className='btn dark-btn' > Submit Now <img src={submit} alt="" /></button>
            </form>
            <span> {result} </span>
        </div>
        </div>
        <Footer/>
        </>
  )
}

export default Contact;