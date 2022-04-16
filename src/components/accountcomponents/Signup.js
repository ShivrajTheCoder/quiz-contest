import React from 'react'

export default function Signup() {

    const handleSubmit=(evt)=>{
        const form=evt.target;
        // console.log(form.confirmPassword.value);
        if(!isNaN(form.username.value.charAt(0)))
        {
            evt.preventDefault();
            alert("username can't start with a number");
        }
        
        else if(form.password.value!==form.confirmPassword.value)
        {
            evt.preventDefault();
            alert("passwords didn't match!");
            form.confirmPassword.value="";
        }
        else if(form.password.value.length<9)
        {
            evt.preventDefault();
            alert("passwrod not strong!");
            form.confirmPassword.value="";
            form.password.value="";
        }
        else{
            alert("valid data!");
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
