import React, {useState} from 'react';
import './ChatScreen.scss'
import {Avatar} from "@material-ui/core";

const ChatScreen = () => {
    const [input,setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Дима',
            image: 'https://st.depositphotos.com/1008939/1880/i/450/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg',
            message: 'Хей',
        },
        {
            name: 'Дима',
            image: 'https://st.depositphotos.com/1008939/1880/i/450/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg',
            message: 'Как дела?',
        },
        {
            message: 'Привет',
        },
    ])

    const handleSend = e =>{
        e.preventDefault();
        setMessages([...messages,{message: input}]);
        setInput('');
    }
    return (
        <div>
            <p className='chatScreen__timestamp'>ВЫ ОБЩАЛИСЬ С ДИМА 15/10/20</p>
            {messages.map(message =>
                message.name ? (
                    <div className='chatScreen__message'>
                        <Avatar className='chatScreen__image'
                                alt={message.name}
                                src={message.image}
                        />
                        <p className='chatScreen__text'> {message.message}</p>
                    </div>
                ) : (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'> {message.message}</p>
                    </div>
                )
            )}


                <form className='chatScreen__input'>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        className='chatScreen__inputField'
                        placeholder='Type a message...'
                    />
                    <button onClick={handleSend} type="submit" className='chatScreen__inputButton'>SEND</button>
                </form>
        </div>

    );
};

export default ChatScreen;
