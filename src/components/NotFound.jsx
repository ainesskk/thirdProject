import BackButton from "./Buttons/BackButton.jsx";

const NotFound = () => {

    return (
        <div className="main-container">
            <BackButton navigateLocation={"/"} />
            <div className="absolute top-2/4 left-2/4 transform translate-x-[-50%] translate-y-[-50%]">
                <h1>Not found</h1>
            </div>
        </div>
    )
}

export default NotFound;
