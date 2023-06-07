import React, { useRef } from 'react'
import './Contact.css'
import {SiMinutemailer} from 'react-icons/si'
import {AiFillPhone} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zcpkaz2', 'template_sqt3lz6', form.current, 'umDnQUX8m0zxGsYo-');

        e.target.reset();
      };
    
    return (
        <section id='contact'>
            <h5>Reach Out to Me</h5>
            <h2>Contact Information</h2>

            <div className="container contact_container">
                <div className='contact_card_container'>
                    <article className='contact_card'>
                        <SiMinutemailer className='contact_icon' />
                        <h4>Email</h4>
                        <h5>michael.mcl812@gmail.com</h5>
                        <a href='mailto:michael.mcl812@gmail.com'>Send an email</a>
                    </article>

                    <article className='contact_card'>
                        <RiWhatsappFill className='contact_icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+1 (607) 316-3797</h5>
                        <a href='https://wa.me/16073163797' target='_blank'>Send a message</a>
                    </article>

                    <article className='contact_card'>
                        <AiFillPhone className='contact_icon'/>
                        <h4>Phone</h4>
                        <h5>(607) 316-3797</h5>
                        <a href="tel:607-316-3797">Call Me</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button className='btn btn-primary' type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact