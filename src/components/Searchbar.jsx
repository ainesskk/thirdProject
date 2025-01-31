import search from "./../assets/search.png"
import "./../styles/Searchbar.css"
import {useState} from "react";

const Searchbar = ({changeSearchString}) => {
    const [searchString, setSearchString] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();
        changeSearchString(searchString);
    }

    return (
        <>
            <div className="searchbar">
                <input className="searchbar-input body-text2" type="text" placeholder="Enter city"
                       onChange={(e) => setSearchString(e.target.value)}/>
                <button className="searchbar-button" onClick={handleClick}>
                    <img src={search} alt="Search" />
                </button>
            </div>
        </>
    )
}

export default Searchbar;