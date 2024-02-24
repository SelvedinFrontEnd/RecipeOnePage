export default function Login() {
    return(
        <>
            <form className="login-form">
                <label>
                    Name:
                    <input type="text" />
                </label>
                <label>
                    Pasword:
                    <input type="text" />
                </label>
                <label>
                    Confirm Pasword:
                    <input type="text" />
                </label>
            </form>
        </>
    )
}