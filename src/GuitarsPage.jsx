import { GuitarsIndex } from './GuitarsIndex'
import axios from 'axios'
import { useState, useEffect } from 'react'

export function GuitarsPage () { 
  const [ guitars, setGuitars ] = useState([]);

  const guitarIndex = () =>  { 
    console.log('guitarIndex');
    axios.get('http://localhost:3000/guitars.json').then((response) => { 
      console.log(response.data);
      setGuitars(response.data);
    });
  };

  useEffect(guitarIndex, []);

  return ( 
   <div>
    <GuitarsIndex guitars={guitars} />
   </div>
  )
}