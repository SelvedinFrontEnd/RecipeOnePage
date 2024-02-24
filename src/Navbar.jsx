import logo from "./download.png"

export default function Navbar() {
    return(
        <>
            <nav>
                <img src={logo} alt="" />
                <div className="login">Login</div>
                <div className="profile">Profile</div>
            </nav>
        </>
    )
}