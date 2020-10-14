import React from 'react';
import './Chats.scss'
import Chat from "./Chat/Chat";

const Chats = () => {
    return (
        <div className='chats'>
            <Chat
                name='Дима'
                message='Эй привет'
                timestamp='40 секунд назад'
                profilePic='https://st.depositphotos.com/1008939/1880/i/450/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg'
            />
            <Chat
                name='Ника'
                message='Как дела?'
                timestamp='2 дня назад'
                profilePic='https://most-beauty.ru/wp-content/uploads/2017/11/Portrety.jpg'
            />
            <Chat
                name='Антон'
                message='Упс'
                timestamp='1 минуту назад'
                profilePic='https://i.pinimg.com/originals/fa/b0/31/fab031c68a81c64bcee366be36a22c8a.jpg'
            />
            <Chat
                name='Даша'
                message='Созвонимся'
                timestamp='5 минут назад'
                profilePic='https://cameralabs.org/media/k2/items/cache/cf2b9605436d06bcc417026c97e7abe3_L.jpg'
            />
        </div>
    );
};

export default Chats;
