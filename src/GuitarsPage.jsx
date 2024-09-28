import { GuitarsIndex } from './GuitarsIndex';
import { GuitarsNew } from './GuitarsNew';
import { Modal } from './Modal';
import { GuitarsShow } from './GuitarsShow'
import axios from 'axios';
import { useState, useEffect } from 'react';

export function GuitarsPage () { 
  const [ guitars, setGuitars ] = useState([]);
  const [ isGuitarVisible, setIsGuitarVisible ] = useState(false);
  const [ currentGuitar, setCurrentGuitar ] = useState({});

  const guitarIndex = () =>  { 
    console.log('guitarIndex');
    axios.get('http://localhost:3000/guitars.json').then((response) => { 
      console.log(response.data);
      setGuitars(response.data);
    });
  };

  const guitarCreate = (params, successCallback) => { 
    axios.post('http://localhost:3000/guitars.json', params).then((response) => { 
      setGuitars([...guitars, response.data]);
      successCallback();
    })
  }
  const guitarShow = (guitar) => { 
    console.log('guitarShow');
    setIsGuitarVisible(true);
    setCurrentGuitar(guitar);
  };

  const guitarClose = () => { 
    console.log('guitarClose');
    setIsGuitarVisible(false);
  };


  useEffect(guitarIndex, []);

  return ( 
   <div>
    <GuitarsIndex guitars={guitars} onShow={guitarShow} />
    <GuitarsNew onCreate={guitarCreate} />
    <Modal show={isGuitarVisible} onClose={guitarClose}>
      <GuitarsShow guitar={currentGuitar} />
    </Modal>
   </div>
  )
}