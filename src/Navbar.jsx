import logo from "./download.png"

export default function Navbar({name}) {
    return(
        <>
            <nav>
                <img src={logo} alt="" />
                <div className="profile">{name}</div>
            </nav>
        </>
    )
}