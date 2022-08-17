import React from 'react';
import { useParams } from 'react-router-dom';
import { amyHumphries1, amyHumphries2, andresMolina, andrewSpencer, clayBanks, coleAnkney, hansIsaacson1, hansIsaacson2, julianHochgesang, justinKauffman, loeweTechnology, samManns } from '../assets';

const roomInfo = [
  ['1', [amyHumphries1, amyHumphries2, andresMolina]],
  ['2', [andrewSpencer, clayBanks, coleAnkney]],
  ['3', [hansIsaacson1, hansIsaacson2, julianHochgesang]],
  ['4', [justinKauffman, loeweTechnology, samManns]]
]

const RoomDetails = () => {
  const {id} = useParams();
  return (
    <div>
      {roomInfo.map((item, itemIndex) => {
          return (id === item[0] &&
            <div key={itemIndex}>
              {item[1].map((image, imageIndex) => (
                <div key={imageIndex}>
                  <img src={image} alt='...' />
                </div>
              ))}
            </div>
          )
      })}
    </div>
  )
}

export default RoomDetails