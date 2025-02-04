import arrow from "../../assets/arrow.png"
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const BackButton = ({navigateLocation}) => {
    const navigate = useNavigate();

    return (
        <button className="absolute mt-3 bg-blue-700 p-2 rounded-2xl transition-all hover:bg-blue-800">
            <img src={arrow} className="max-w-[25px] md:max-w-[35px]" alt="arrow" onClick={() => {
                navigate(navigateLocation)
            }}/>
        </button>
    )
}

export default BackButton;

BackButton.propTypes = {
    navigateLocation: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
