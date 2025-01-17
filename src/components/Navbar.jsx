import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">

                {/*<div className="main-container">*/}
                    <nav className="main-container navbar">
                        <a>
                            <li>
                                {/*<img src="src/assets/weather.png" alt="Weather"/>*/}
                                <p>Forecast</p>
                            </li>
                        </a>
                        <a>
                            <li>
                                {/*<img src="src/assets/pin.png" alt="Pin"/>*/}
                                <p>Locations</p>
                            </li>
                        </a>
                        <a>
                            <li>
                                <img src="src/assets/settings.png" alt="Settings"/>
                                {/*<p>Settings</p>*/}
                            </li>
                        </a>
                    </nav>
                {/*</div>*/}
                </div>
            </>
            )
            }

            export default Navbar;