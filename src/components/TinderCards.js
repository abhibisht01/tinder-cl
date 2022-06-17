import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import '../css/tindercards.css'
import database from '../firebase ';

function TinderCards() {
  const [people, setPeople] = useState([

  ]);

  useEffect(() => {
    const unsubscribe = database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map(doc => doc.data()))
      );
    return () => {
      // this is the cleanup

      unsubscribe();
    }

  }, [])


  // normal way to push an array 
  // const people =[];
  //  people.push("merit ", "abhishek")


  // how to push array into react 
  // setPeople([...people , "merit" ,"abhishek"]) 


  return (
    <div className='tindercard'>

      <div className="tinderCards__cardContainer">
        {
          people.map((person) => (
            <TinderCard className='swipe'
              key={person.name}
              preventSwipe={['up', 'down']}>
              <div
                style={{ backgroundImage: `url( ${person.url})` }}
                className="card">
                <h3>{person.name}</h3>
              </div>
            </TinderCard>

          ))
        }

      </div>

    </div>
  )
}

export default TinderCards