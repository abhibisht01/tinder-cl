import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import '../css/chatscreen.css'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Amber",
            image: "https://www.mordeo.org/download/16524/",
            message: "Hey.. You know what happened?"

        },
        {
            name: "Amber",
            image: "https://www.mordeo.org/download/16524/",
            message: "My dog stepped on the Bee :)"

        },
        {
            message: " Yea....and U know what happened"
        },
        {
            message: " I can't find my key..😂😂😂😂😂😂"
        }
    ])
    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH AMBER ON 8/5/21</p>
            {messages.map(message => (
                message.name ? (<div className='chatScreen__message'>
                    <Avatar className='chatScreen__image '
                        alt={message.name}
                        src={message.image} />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>)
                    : (
                        <div className="chatScreen__message">
                            <p className='chatScreen__textUser'>{message.message}</p>

                        </div>
                    )
            ))
            }
            <div >
                <form className='chatScreen__input'>
                    <input
                        value={input} onChange={(e) => setInput(e.target.value)} className="chatScreen__inputField" placeholder='Type a Message' type='text' />
                    <button onClick={handleSend} type="submit" className='chatScreen__inputButton'>SEND </button>

                </form>
            </div>

        </div>
    )
}

export default ChatScreen