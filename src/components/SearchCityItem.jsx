const SearchCityItem = ({cityName}) => {

    return (
        <>
            <div className="inline-block bg-white px-[15px] py-[10px] m-4 rounded-2xl cursor-pointer border-[2px] border-gray-100 shadow-lg hover:shadow-xl hover:bg-gray-100">
                <p className="body-text2 text-black">{cityName}</p>
            </div>
        </>
    )
}

export default SearchCityItem;