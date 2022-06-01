import React , { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Linkedin_icon from '../Assets/linkedin_icon1.jpg';
import Mail_icon from '../Assets/mail-icon.jpg';
import Git_icon from '../Assets/git_icon.png';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('anchal_gmail', 'template_o1yebra', form.current, 'dXHEL_5ofjxiJ71LT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <>
    <div><h1 className='contact-header'>Contact me</h1></div>
    <div className='contact-container'>
      <div className='form-box'>
      <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label> */}
      <input type="text" name="name" placeholder="Name" /><br></br>
      {/* <label>Email</label> */}
      <input type="email" name="email" placeholder="Email"/><br></br>
      {/* <label>Subject</label> */}
      <input type="text" name="subject" placeholder="Subject"/><br></br>
      {/* <label>Message</label> */}
      <textarea name="message" placeholder="Type a message"/><br></br>
      <input type="submit" className='button' value="SUBMIT" />
    </form>
    </div>
    </div>
    <div className='img_wrapper_contact'>
      <h2>Get in touch!</h2>
       <a href='https://www.linkedin.com/in/anchal-tyagi-4b5192182/' target = "_blank"><img src={Linkedin_icon} alt="Linkedin" className='img_link'/></a>
       <a href="mailto:anchaltyagi3100@gmail.com"><img src={Mail_icon} alt="Linkedin" className='img_link'/></a>
       <a href="https://github.com/anchaltyagii?tab=repositories" target="_blank" className='git_link'> <img src={Git_icon} alt="git-icon" className='img_link'/></a>
    </div>
    </>
  )
}

export default Contact
