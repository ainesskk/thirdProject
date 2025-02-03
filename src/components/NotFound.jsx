import BackButton from "./BackButton.jsx";

const NotFound = () => {
    const styles = {
        container: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",

        }
    };

    return (
        <div className="main-container">
            <BackButton navigateLocation={"/"} />
            <div style={styles.container}>
                <h1>Not found</h1>
            </div>
        </div>
    )
}

export default NotFound;
