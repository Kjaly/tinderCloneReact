import React, {useEffect, useState} from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.scss'
import database from "../firebase/firebase";

const TinderCards = () => {

    const [people, setPeople] = useState([]);

    useEffect(()=>{
        database
            .collection('people')
            .onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map(doc=>doc.data()))
        )
    },[])

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard className='swipe'
                                key={person.name}
                                preventSwipe={['up', 'down']}>
                        <div style={{background: `url(${person.url}) no-repeat center center / cover`}}
                             className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default TinderCards;
