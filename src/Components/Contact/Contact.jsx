import React from 'react'
import './Contact.css'
import {SiMinutemailer} from 'react-icons/si'
import {AiFillPhone} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Reach Out to Me</h5>
            <h2>Contact Information</h2>

            <div className="container contact_container">
                <div className='contact_card_container'>
                    <article lassName='contact_card'>
                        <SiMinutemailer />
                        <h4>Email</h4>
                        <h5>michael.mcl812@gmail.com</h5>
                        <a href='mailto:michael.mcl812@gmail.com'>Send an email</a>
                    </article>

                    <article lassName='contact_card'>
                        <RiWhatsappFill />
                        <h4>WhatsApp</h4>
                        <h5>+11111111</h5>
                        <a href='https://api.whatsapp.com/send?phone='>Send a message</a>
                    </article>

                    <article lassName='contact_card'>
                        <AiFillPhone />
                        <h4>Phone</h4>
                        <h5>sdaf</h5>
                        <a href='mailto:michael.mcl812@gmail.com'>phones numebr</a>
                    </article>
                </div>

                <form action=''>
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