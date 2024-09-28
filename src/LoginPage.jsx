import axios from 'axios';
import { useState } from 'react';

const jwt = localStorage.getItem('jwt');
if (jwt) { 
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function LoginPage () { 
  const [ errors, setErrors ] = useState([]);

  const handleSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
  }
}