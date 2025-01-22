const WeatherOption = ({option, value, units, header}) => {
    return (
        <div className="col-span-2 xs:col-span-1 md:col-span-2 xl:col-span-3">
            <p className="mb-3 body-text">{header}</p>
            <div className="flex items-center bg-[#EBEBEB] py-3.5 rounded-xl">
                <div className="w-[30%]">
                    <img className="max-w-[30px] mx-auto" src={`src/assets/${option}.png`} alt={option}/>
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
