import React, { useState, useEffect} from "react";
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

const User = () =>{
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        site: ""
    });
    const {id} = useParams();
    useEffect(() => {
        loadUser();
    },[]);
    const loadUser = async() =>{
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        // console.log(result);
        setUser(res.data);
    };
    return(
        <div className="container border mt-3 shadow">
            <h1 className="text-center mt-2 mb-2 text-gradient-purple">{user.name}'s Details</h1>
         <ul class="list-group pb-3">
    <li class="list-group-item ">ID: {id}</li>
    <li class="list-group-item">Name: {user.name}</li>
  <li class="list-group-item">Username: {user.username}</li>
    <li class="list-group-item">Email: {user.email}</li>
    <li class="list-group-item">Phone: {user.phone}</li>
    <li class="list-group-item">Website: {user.site}</li>
</ul>
        </div>
    )
};

export default User;