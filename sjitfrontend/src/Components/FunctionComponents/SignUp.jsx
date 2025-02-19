function Signup()
{
    return (
        <div>
            Username : <input type="text" placeholder="username"/>
            <br />
            Email : <input type="text" placeholder="email" />
            <br />
            Password : <input type="password" placeholder="passwword" required/>
            <br />
            Confirm Password : <input type="password" placeholder="passwword" required/>
            <br />
            DOB : <input type="date"  />
            <br />

        </div>
    )
}
export default Signup

