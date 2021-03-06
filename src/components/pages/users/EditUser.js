import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
    // alert(id);
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        site: ""
    });
    const {name, username, email, phone, site} = user;
    const onInputChange = e =>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
    }
    useEffect(() => {
        loadUser();
    },[]);

    const onSubmit = async e=>{
        e.preventDefault();
      await axios.put(`http://localhost:3003/users/${id}`, user);
      history.push("/")
    };
    const loadUser = async() =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        // console.log(result);
        setUser(result.data);
    }
    return(
        <div className="container border shadow mt-3 p-5 ">
            <h1 className="text-center mb-4 mt-4">Edit User Details</h1>
            <form onSubmit= {e=>onSubmit(e)}>
  <div class="form-group row mt-5">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" name="name" id="inputEmail3" placeholder="Enter your Name" value={name} onChange={e=>onInputChange(e)} />
    </div>
  </div>
  <div class="form-group row mt-5">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" name="username" id="inputEmail3" placeholder="Enter your Username" value={username} onChange={e=>onInputChange(e)}/>
    </div>
  </div>
  <div class="form-group row mt-5">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" name="email" id="inputEmail3" placeholder="Enter your Email Address" value={email} onChange={e=>onInputChange(e)}/>
    </div>
  </div>
  <div class="form-group row mt-5">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Phone Number</label>
    <div class="col-sm-10">
      <input type="tel" class="form-control" name="phone" id="inputEmail3" placeholder="Enter your Phone Number" value={phone} onChange={e=>onInputChange(e)}/>
    </div>
  </div>
  <div class="form-group row mt-5">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Website</label>
    <div class="col-sm-10">
      <input type="url" class="form-control" name="site" id="inputEmail3" placeholder="Enter your Website Address" value={site} onChange={e=>onInputChange(e)}/>
    </div>
  </div>
  
 
  <div class="form-group row  ml-5 mt-5 text-center">
    <div class="col-sm-10 float-right">
      <button type="submit" class="btn btn-primary btn-dark shadow">Update</button>
    </div>
  </div>
</form>
        </div>

    );
};

export default EditUser;