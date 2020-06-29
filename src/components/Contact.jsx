import React from 'react'
import '../styles/stylesheets/contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div id='contact'><h1 className='section-title'>Contact</h1></div>
            <div className='form-container'>
                <form 
                    action="https://formspree.io/xpzlojyv" 
                    method="POST"
                >
                    <h3>Name:</h3>
                    <input 
                        className='text'
                        type="text" 
                        name="name" 
                        placeholder='first and last'
                    ></input>
                    <h3>Email:</h3>
                    <input 
                        className='text'
                        type="email" 
                        name="_replyto" 
                        placeholder='valid email'
                    ></input>
                    <h3>Message:</h3>
                    <textarea 
                        className='textarea'
                        type='text' 
                        name='message' 
                        rows='7' 
                        cols='30' 
                        placeholder='write me a message'
                    ></textarea>
                    <input 
                        className='button' 
                        type="submit" 
                        value="Send"
                    ></input>
                </form>
            </div>
        </div>
    )
}

export default Contact
