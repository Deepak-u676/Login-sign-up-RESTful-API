import React, { useState } from 'react'
import "../App.css";
import UserLogin from './userLogin';

const UserReg = () => {
    const [name, setname] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastname, setlastname] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [Conformpassword, setConformpassword] = useState("")

    const regUser = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                firstName: firstName,
                lastname: lastname,
                userEmail: userEmail,
                userPassword: userPassword,
                Conformpassword: Conformpassword
            }),
            headers: { "contentType": "application/json" },
        })
            .then((res) => res.json())
            .then((data) =>
                console.log(data)

            );

    }
    return (
        <>
            <h3> User Register</h3>
            <form className='mainContainer' onSubmit={regUser}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e) => setname(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >firstName</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e) => setfirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">LastName</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e) => setlastname(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setUserEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setUserPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Conform Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={setConformpassword} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <>
                <UserLogin />
            </>
        </>
    )
}

export default UserReg