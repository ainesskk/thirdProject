import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <nav className="navbar">
                    <a>
                        <li>
                            <img src="src/assets/weather.png" alt="Weather" />
                        </li>
                    </a>
                    <a>
                        <li>
                            <img src="src/assets/pin.png" alt="Pin"/>
                        </li>
                    </a>
                    <a>
                        <li>
                            <img src="src/assets/settings.png" alt="Settings" />
                        </li>
                    </a>
                </nav>
            </div>
        </>
    )
}

export default Navbar;