import arrow from "./../assets/arrow.png"
import {useNavigate} from "react-router-dom";

const BackButton = ({navigateLocation}) => {
    const navigate = useNavigate();

    return (
        <button className="absolute mt-3 bg-blue-700 p-2 rounded-2xl">
            <img src={arrow} className="max-w-[25px] md:max-w-[35px]" alt="arrow" onClick={() => {
                navigate(navigateLocation)
            }}/>
        </button>
    )
}

export default BackButton;