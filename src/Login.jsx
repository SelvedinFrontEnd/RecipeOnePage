import { useState } from "react"

export default function Login({setName}) {
    const [name, setLocalName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("")

    function handleNameChange(e) {
        setLocalName(e.target.value);
    }

    function handleRegister(e) {
        e.preventDefault();

        if (!name || !password || !confirmPassword) {
            setErrors("All fields are required!");
        } else if(password !== confirmPassword) {
            setErrors("Passwords do not match!")
        } else {
            document.querySelector(".login-form").style.display = "none"
            document.querySelector(".createrecipe").style.display = "flex"
            setName(name);
            setErrors("")
        }
    };

    return(
        <>
            <form 
            className="login-form"
            onSubmit={handleRegister}
            >
                <label>
                    Name:
                    <input 
                    type="text" 
                    value={name}
                    onChange={handleNameChange}
                    />
                </label>
                <label>
                    Pasword:
                    <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    Confirm Pasword:
                    <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                {errors && <p style={{color: "red"}}>{errors}</p>}
                <button className="btn">Register</button>
            </form>
        </>
    )
}