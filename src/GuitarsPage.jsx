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

  const guitarUpdate = (id, params, successCallback) => { 
    console.log('guitarUpdate', params);
    axios.patch(`http://localhost:3000/guitars/${id}.json`, params).then((response) => { 
      setGuitars( 
        guitars.map((guitar) => { 
          if (guitar.id === response.data.id) { 
            return response.data;
          } else { 
            return guitar;
          }
          })
        );
        successCallback();
        guitarClose();
    })
  }

  const guitarDestroy = (id) => { 
    console.log('guitarDestroy', id);
    axios.delete(`http://localhost:3000/guitars/${id}.json`).then(() => { 
      setGuitars(guitars.filter((guitar) => guitar.id !== id));
      guitarClose()
    })
  }

  useEffect(guitarIndex, []);

  return ( 
   <div>
    <GuitarsIndex guitars={guitars} onShow={guitarShow} />
    <GuitarsNew onCreate={guitarCreate} guitars={guitars} />
    <Modal show={isGuitarVisible} onClose={guitarClose}>
      <GuitarsShow guitar={currentGuitar} onUpdate={guitarUpdate} onDestroy={guitarDestroy}/>
    </Modal>
   </div>
  )
}