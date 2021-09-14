import React, { useEffect } from 'react'
import { BASE_URL } from '../env';

const Home = () => {
    useEffect(() => {
        const getdata=()=>{
          fetch(`${BASE_URL}/api/account`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-access-tokens' : localStorage.getItem('token')
              }})
          .then(response => response.json())
          .then(data => console.log(data));}
        getdata()
      }, [])
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home
