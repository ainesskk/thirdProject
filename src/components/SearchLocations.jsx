import Searchbar from "./Searchbar.jsx";
import {useEffect, useState} from "react";
import {getSearchCities} from "../api/geolocationApi.js";
import "./../styles/SearchLocations.css"
import {v4 as uuidv4} from "uuid";
import SearchCityItem from "./SearchCityItem.jsx";

const SearchLocations = () => {
    const [searchString, setSearchString] = useState(null);
    const [foundCities, setFoundCities] = useState([]);

    const changeSearchString = (searchString) => {
        setSearchString(searchString);
    }

    useEffect(() => {
        const searchCities = async () => {
            if(searchString){
                // const response = await getSearchCities(searchString);
                // console.log(response);
                const response = [
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                    {name: "Moscow"},
                ]
                setFoundCities(response);
            }
        }

        searchCities();
    }, [searchString]);

    return (
        <>
            {/*<div className="search-locations-container">*/}
                <Searchbar changeSearchString={changeSearchString}/>
                {
                    foundCities.length !== 0 ?
                        <div className="flex flex-wrap justify-center">
                            {
                                foundCities.map((city) => (
                                    <SearchCityItem key={uuidv4()} cityName={city.name}/>
                                ))
                            }
                        </div>
                        :
                        <div className="text-center py-[12px] m-4">
                            <p className="body-text2">No results</p>
                        </div>
                }
            {/*</div>*/}
        </>
    )
}

export default SearchLocations;