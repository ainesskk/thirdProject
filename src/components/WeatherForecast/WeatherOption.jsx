import PropTypes from "prop-types";

const WeatherOption = ({option, value, units, header, image}) => {

    return (
        <div className="col-span-2 xs:col-span-1 md:col-span-2 xl:min-w-[350px]">
            <p className="mb-3 body-text">{header}</p>
            <div className="flex items-center bg-[#EBEBEB] py-3.5 rounded-xl">
                <div className="w-[30%]">
                    <img className="max-w-[30px] mx-auto" src={image} alt={option}/>
                </div>
                <div className="flex items-center justify-center w-[70%]">
                    <p className="subtitle mr-[10px]">{value}</p>
                    <span>{units}</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherOption;

WeatherOption.propTypes = {
    option: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    units: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
}
