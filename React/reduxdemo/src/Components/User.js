import React, { useEffect, useState } from 'react'
import axios from 'axios'

function User() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users');
            let data = res.data;
            setUsers(data);
            setLoading(false);
        }
        catch (err) {
            setError(err);
            setLoading(false);
        }
    })
  return (
      <>
          {
              loading ? <h1>Loading Data .....</h1> : error != '' ? <h1>{error}</h1> :
                  <ul>
                      {
                          users.map((user) => (
                              <l1>{user.name}</l1>
                          ))
                      }
                  </ul>
          }
      </>
  )
}

export default User