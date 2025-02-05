import "../../styles/Settings.css";
import close from "../../assets/delete.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Settings from "./Settings.jsx";
import { useEffect, useRef } from "react";

const BurgerMenu = ({ isOpened, handleClickClose }) => {
    const burgerMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (burgerMenuRef.current && !burgerMenuRef.current.contains(e.target) && !e.target.closest('.nav-item-icon')) {
                handleClickClose();
            }
        };


        if (isOpened) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpened, handleClickClose]);

    return (
        <>
            <div className={`settings-container ${isOpened ? "activated" : ""}`} ref={burgerMenuRef}>
                <div className="mx-4">
                    <img
                        className="max-w-[20px] max-h-[20px] cursor-pointer my-6"
                        src={close}
                        alt="Delete"
                        onClick={handleClickClose}
                    />
                    <div className="flex flex-col md:hidden">
                        <Link to="/" onClick={handleClickClose}>
                            <p className="subtitle cursor-pointer inline-block my-3 border-b-2 border-b-blue-700">
                                Forecast
                            </p>
                        </Link>
                        <Link to="/locations" onClick={handleClickClose}>
                            <p className="subtitle cursor-pointer inline-block my-3 border-b-2 border-b-blue-700">
                                Locations
                            </p>
                        </Link>
                    </div>
                    <Settings />
                </div>
            </div>
        </>
    );
};

BurgerMenu.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    handleClickClose: PropTypes.func.isRequired,
};

export default BurgerMenu;
