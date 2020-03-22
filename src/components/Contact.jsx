import React from 'react'
import '../styles/stylesheets/contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <a id='contact'><h1>Contact</h1></a>
            <div className='form-container'>
                <form action="https://formspree.io/xpzlojyv" method="POST">
                    <h3>Name:</h3>
                    <input type="text" name="name" placeholder='name'></input>
                    <h3>Email:</h3>
                    <input type="email" name="_replyto" placeholder='email'></input>
                    <h3>Message:</h3>
                    <textarea type='text' name='message' rows='7' cols='30' placeholder='send me words'></textarea>
                    <input className='button' type="submit" value="Send"></input>
                </form>
            </div>
        </div>
    )
}

export default Contact
