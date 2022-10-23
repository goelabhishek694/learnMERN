import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchUsers } from '../redux/userAction'
import { connect } from 'react-redux'

function User({userData,fetchUserss}) {
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');
    // const [users, setUsers] = useState([]);

    useEffect(() => {
        // async function getUserData() {
        //     try {
        //         let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        //         let data = res.data;
        //         setUsers(data);
        //         setLoading(false);
        //     }
        //     catch (err) {
        //         // console.log("err ",err);
        //         setError(err.message);
        //         setLoading(false);
        //     }
        // }
        // getUserData()
        fetchUserss();
    },[])
  return (
    <>
      {userData.loading ? (
        <h1>Loading Data .....</h1>
      ) : userData.error != "" ? (
        <h1>{userData.error}</h1>
      ) : (
        <ul>
          {userData.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
    return {
        userData:state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUserss:()=>dispatch(fetchUsers())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(User);