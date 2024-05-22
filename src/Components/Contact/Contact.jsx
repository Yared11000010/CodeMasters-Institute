import './Contact.css';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png';
import React from 'react';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0c8682f3-b181-46ab-9e0e-0bbfe4fd4655");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();

      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact' id='contact_us'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact from or find our contact information below.
            Your feedback, questions, and suggestions are important to us as we strive to 
            provide exceptional service to our univeristy community.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" /> Contact@yared.debela.ayele@gmail.com</li>
            <li><img src={phone_icon} alt="" /> +2519126511**</li>
            <li><img src={location_icon} alt="" /> Addis Ababa, 4 kilo 😃</li>
        </ul>
      </div>
      <div className="contact-col">
         <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" id="name" placeholder='Enter your name'  required/>
            <label htmlFor="">Phone Number</label>
            <input type="tel" name="phone" id="phone" placeholder='Enter your phone number'  required/>
            <label htmlFor="">Write your message here</label>
            <textarea name='message' rows={6} placeholder='Enter your mesage' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" className='white_arrow' /></button>          </form>
          <span>{result}</span>
      </div>
    </div>
  )
}
