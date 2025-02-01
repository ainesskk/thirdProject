const NotFound = () => {
    const styles = {
        container: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }
    };

    return (
        <div style={styles.container}>
            <h1>Not found</h1>
        </div>
    )
}

export default NotFound;
