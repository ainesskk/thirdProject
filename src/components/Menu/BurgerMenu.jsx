import "../../styles/Settings.css"
import close from "../../assets/delete.png"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import Settings from "./Settings.jsx";

const BurgerMenu = ({isOpened, handleClickClose}) => {

    return (
        <>
            <div className={`settings-container ${isOpened ? "activated" : ""}`}>
                <div className="mx-4">
                    <img className="max-w-[20px] max-h-[20px] cursor-pointer my-6" src={close} alt="Delete"
                         onClick={handleClickClose}/>
                    <div className="flex flex-col md:hidden">
                        <Link to="/">
                                <p className="subtitle cursor-pointer inline-block my-3 border-b-2 border-b-blue-700">Forecast</p>
                        </Link>
                        <Link to="/locations">
                            <p className="subtitle cursor-pointer inline-block my-3 border-b-2 border-b-blue-700">Locations</p>
                        </Link>
                    </div>
                    <Settings />
                </div>
            </div>
        </>
    )
}

export default BurgerMenu;

BurgerMenu.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    handleClickClose: PropTypes.func.isRequired,
}