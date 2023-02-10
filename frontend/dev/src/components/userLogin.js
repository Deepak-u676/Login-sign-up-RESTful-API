import React, { useState } from 'react'

const UserLogin = () => {

    const [name, setname] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [conformpassword, setconformpassword] = useState("")

    const loginUser = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                userEmail: userEmail,
                userPassword: userPassword,
                conformpassword: conformpassword,
            }),
            headers: { "contentType": "application/json" },
        })
            .then((res) => (res))
            .then((result) => {
                console.log(result);
            })

    }
    console.log(loginUser);
    return (
        <>
            <h3>User Login</h3>
            <form className='mainContainer' onClick={loginUser}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onClick={(e) => setname(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onClick={(e) => setUserEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onClick={(e) => setUserPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Conform Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onClick={(e) => setconformpassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default UserLogin